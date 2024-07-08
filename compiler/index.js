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
    const timeComplexityAnalysis = estimateTimeComplexity(code); // Estimate time complexity

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
