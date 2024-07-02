// const fs = require("fs");
// const path = require("path");
// const { v4: uuid } = require("uuid");
// const { exec } = require("child_process");
// const { stderr } = require("process");

// const outputPath = path.join(__dirname, "outputs");

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

// const executeCpp = (filepath) => {
//   // extracting back the jobID
//   const jobID = path.basename(filepath).split(".")[0]; //it gives array of strings off which we remove the .cpp and get the jobId only by selecting the first element of the array, since only one dot was there we got array of two strings
//   const filename = `${jobID}.exe`;
//   const outPath = path.join(filepath, filename);

//   return new Promise((resolve, reject) => {
//     exec(
//       `g++ ${filepath} -o ${outPath} && cd ${outputPath} .\\${filename}`,
//       //   `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.exe`,
//       (error, stdout, stderr) => {
//         //if code runs perfectly fine, it returns stdout
//         if (error) reject(error); //to check for code errors
//         if (stderr) reject(stderr); //to check for commandline errors eg. g++ not installed, packets deprecated etc
//         resolve(stdout);
//       }
//     );
//   });
// };

// module.exports = {
//   executeCpp,
// };

// const fs = require("fs");
// const path = require("path");
// const { v4: uuid } = require("uuid");
// const { exec } = require("child_process");
// const { promisify } = require("util");

// const execAsync = promisify(exec);
// const outputPath = path.join(__dirname, "outputs");

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

// const executeCpp = async (filepath) => {
//   // extracting back the jobID
//   const jobID = path.basename(filepath).split(".")[0]; //it gives array of strings off which we remove the .cpp and get the jobId only by selecting the first element of the array, since only one dot was there we got array of two strings
//   const outputExecutablePath = path.join(
//     path.dirname(filepath),
//     `${jobID}.exe`
//   );

//   try {
//     // Compile the C++ file
//     //       `g++ ${filepath} -o ${outPath} && cd ${outputPath} .\\${filename}`,

//     await execAsync(`g++ "${filepath}" -o "${outputExecutablePath}"`);

//     // Execute the compiled file
//     const { stdout, stderr } = await execAsync(`"${outputExecutablePath}"`);

//     if (stderr) {
//       throw new Error(stderr);
//     }

//     return stdout;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   executeCpp,
// };

// const fs = require("fs");
// const path = require("path");
// const { v4: uuid } = require("uuid");
// const { exec } = require("child_process");
// const { promisify } = require("util");

// const execAsync = promisify(exec);
// const outputPath = path.join(__dirname, "outputs");

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

// const executeCpp = async (filepath, inputPath) => {
//   // extracting back the jobID
//   const jobID = path.basename(filepath).split(".")[0]; // it gives array of strings off which we remove the .cpp and get the jobId only by selecting the first element of the array, since only one dot was there we got array of two strings
//   const outputExecutablePath = path.join(outputPath, `${jobID}.out`); //.exe for windows

//   try {
//     // Compile the C++ file
//     // await execAsync(`g++ "${filepath}" -o "${outputExecutablePath}"`);

//     await execAsync(`g++ ${filepath} -o ${outputExecutablePath}`);

//     // Change directory to output path
//     await execAsync(`cd ${outputPath}`);

//     // Execute compiled executable with input file
//     await execAsync(`.\\${jobID}.out < ${inputPath}`);

//     // Execute the compiled file
//     const { stdout, stderr } = await execAsync(`"${outputExecutablePath}"`);

//     if (stderr) {
//       throw new Error(stderr);
//     }

//     return stdout;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   executeCpp,
// };

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
    await execAsync(`g++ "${filepath}" -o "${outputExecutablePath}"`);

    // Execute the compiled file with input redirection
    const { stdout, stderr } = await execAsync(
      `"${outputExecutablePath}" < "${inputPath}"`
    );

    if (stderr) {
      throw new Error(stderr);
    }
    return stdout;
  } catch (error) {
    // return res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};

module.exports = {
  executeCpp,
};

//recursive true and child_process(go through node.js documentation) to be learnt as the homework
