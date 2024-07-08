const axios = require("axios");

const verdict = async (problemId, executeCode) => {
  try {
    // Fetch test case data from server
    if (problemId === null || problemId === undefined) {
      problemId = 0;
    }
    const response = await axios.get(
      // `http://localhost:9000/byProblem/${problemId}`
      `https://online-judge-eb8n.onrender.com/byProblem/${problemId}`
    );
    const testCases = response.data; // Assuming response.data is an array of test cases

    // Iterate over each test case
    for (let i = 0; i < testCases.length; i++) {
      const { input, expected_output } = testCases[i];

      // Ensure input is defined and execute code with it
      if (!input) {
        throw new Error("Input data is undefined or missing");
      }
      const actualOutput = await executeCode(input);

      // Compare actual output with expected output
      if (actualOutput.trim() !== expected_output.trim()) {
        return `Test case ${
          i + 1
        } failed: for ${input}  Expected "${expected_output}", but got "${actualOutput}"`;
      }
    }

    return "All test cases passed!";
  } catch (error) {
    console.error("Error in verdict function:", error);
    return "Error in verifying test cases";
  }
};

module.exports = { verdict };
