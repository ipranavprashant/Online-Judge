const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);
const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = async (filepath, inputPath) => {
  const jobID = path.basename(filepath).split(".")[0];
  const outputExecutablePath = path.join(outputPath, `${jobID}.out`);

  try {
    // Compile the C++ file
    const compileCommand = `g++ -std=c++11 "${filepath}" -o "${outputExecutablePath}"`;
    const { stdout: compileStdout, stderr: compileStderr } = await execAsync(
      compileCommand
    );

    if (compileStderr) {
      throw new Error(`Compilation error: ${compileStderr}`);
    }

    // Execute the compiled file with input redirection
    const executeCommand = `"${outputExecutablePath}" < "${inputPath}"`;
    const { stdout, stderr } = await execAsync(executeCommand);

    if (stderr) {
      throw new Error(`Runtime error: ${stderr}`);
    }

    return stdout.trim(); // Ensure the output is trimmed to remove extra whitespace
  } catch (error) {
    console.error(`Error executing C++ code (${jobID}):`, error.message);
    return ""; // Return an empty string or handle as needed in your application
  }
};

const executePython = async (filepath, inputPath) => {
  try {
    const { stdout, stderr } = await execAsync(
      `python3 "${filepath}" < "${inputPath}"`
    );

    if (stderr) {
      throw new Error(stderr);
    }
    return stdout;
  } catch (error) {
    console.log(error);
  }
};

const executeJavaScript = async (filepath, inputPath) => {
  try {
    const { stdout, stderr } = await execAsync(
      `node "${filepath}" < "${inputPath}"`
    );

    if (stderr) {
      throw new Error(stderr);
    }
    return stdout;
  } catch (error) {
    console.log(error);
  }
};

const executeJava = async (filepath, inputPath) => {
  const jobID = path.basename(filepath).split(".")[0];
  const className = path.basename(filepath, ".java");
  const classPath = path.dirname(filepath);

  try {
    // Compile the Java file
    await execAsync(`javac "${filepath}"`);

    // Execute the compiled Java file with input redirection
    const { stdout, stderr } = await execAsync(
      `java -cp "${classPath}" "${className}" < "${inputPath}"`
    );

    if (stderr) {
      throw new Error(stderr);
    }
    return stdout;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  executeCpp,
  executePython,
  executeJavaScript,
  executeJava,
};

//recursive true and child_process(go through node.js documentation) to be learnt as the homework
