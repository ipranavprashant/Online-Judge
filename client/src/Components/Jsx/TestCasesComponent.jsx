import React, { useState } from "react";
import TestCaseForm from "./TestCaseForm";
import TestCaseList from "./TestCaseList";
import "../Styles/TestCases.css";

const TestCasesComponent = () => {
  const [testCases, setTestCases] = useState([
    { id: 1, input: "1 2", output: "3" },
    { id: 2, input: "3 5", output: "8" },
  ]);

  const addTestCase = (input, output) => {
    const newTestCase = { id: testCases.length + 1, input, output };
    setTestCases([...testCases, newTestCase]);
  };

  return (
    <div className="test-cases-component">
      <h2>Sample Test Cases</h2>
      {/* <TestCaseForm addTestCase={addTestCase} /> */}
      <TestCaseList testCases={testCases} />
    </div>
  );
};

export default TestCasesComponent;
