if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { generateFile } = require("./generateFile");
const { generateInputFile } = require("./generateInputFile");
const {
  executeCpp,
  executePython,
  executeJavaScript,
  executeJava,
} = require("./execute");
const { verdict } = require("./verdict");
const app = express();
const cors = require("cors");
const { estimateTimeComplexity } = require("./estimateTimeComplexity");
const run = require("./geminiAPI");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code, input, problemId } = req.body;

  if (code === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Empty code body!" });

  try {
    // Generate files (if needed) and execute user's code
    const filepath = await generateFile(language, code);
    const inputPath = await generateInputFile(input);
    let output;

    const executeCode = async (input) => {
      const inputFilePath = await generateInputFile(input);

      switch (language) {
        case "cpp":
          return (output = await executeCpp(filepath, inputFilePath));
        case "python":
          return (output = await executePython(filepath, inputFilePath));
        case "javascript":
          return (output = await executeJavaScript(filepath, inputFilePath));
        case "java":
          return (output = await executeJava(filepath, inputFilePath));
        default:
          throw new Error("Unsupported language!");
      }
    };

    // Call verdict function to verify output against test cases
    const verificationResult = await verdict(problemId, executeCode);
    let prompt = "Whats the time complexity of the following code: " + code;
    // let prompt = "hi how are you!";
    const timeComplexityAnalysis = await run(prompt); // Estimate time complexity
    // console.log(timeComplexityAnalysis);

    // Respond with results
    return res.json({
      language,
      code,
      input,
      output,
      verdict: verificationResult,
      timeComplexity: timeComplexityAnalysis,
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

app.post("/compile", async (req, res) => {
  const { language = "cpp", code, input, problemId } = req.body;

  if (code === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Empty code body!" });

  // Generate files (if needed) and execute user's code
  const filepath = generateFile(language, code);
  const inputFilePath = generateInputFile(input);
  let output;

  try {
    switch (language) {
      case "cpp":
        output = await executeCpp(filepath, inputFilePath);
        break;
      case "python":
        output = await executePython(filepath, inputFilePath);
        break;
      case "javascript":
        output = await executeJavaScript(filepath, inputFilePath);
        break;
      case "java":
        output = await executeJava(filepath, inputFilePath);
        break;
      default:
        return res
          .status(400)
          .json({ success: false, message: "Unsupported language!" });
    }

    // Respond with results
    return res.json({
      language,
      code,
      input,
      output,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error executing code",
    });
  }
});

app.post("/custom-testcase", async (req, res) => {
  const { language = "cpp", code, input, problemId } = req.body;

  if (code === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Empty code body!" });

  // Generate files (if needed) and execute user's code
  const filepath = generateFile(language, code);
  const inputFilePath = generateInputFile(input);
  let output;

  try {
    switch (language) {
      case "cpp":
        output = await executeCpp(filepath, inputFilePath);
        break;
      case "python":
        output = await executePython(filepath, inputFilePath);
        break;
      case "javascript":
        output = await executeJavaScript(filepath, inputFilePath);
        break;
      case "java":
        output = await executeJava(filepath, inputFilePath);
        break;
      default:
        return res
          .status(400)
          .json({ success: false, message: "Unsupported language!" });
    }

    // Respond with results
    return res.json({
      language,
      code,
      input,
      output,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error executing code",
    });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
