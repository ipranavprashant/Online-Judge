const express = require("express");
const { generateFile } = require("./generateFile");
const { generateInputFile } = require("./generateInputFile");
const { executeCpp } = require("./executeCpp");
const fs = require("fs");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //urlencoded if you go to the body part you see urlencoded

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code, input } = req.body;
  if (code === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Empty code body!" });

  try {
    // const code =
    //   '#include<bits/stdc++.h> using namespace std; int main(){cout<<"Pranav";return 0;}';
    const filepath = await generateFile(language, code);
    const inputPath = await generateInputFile(input);
    const output = await executeCpp(filepath, inputPath);
    return res.json({ language, code, inputPath, input, output });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
  // res.json({ language, code, inputPath, input, output });
});

app.listen(8080, () => {
  console.log("Server is running on port: 8080\n");
});
