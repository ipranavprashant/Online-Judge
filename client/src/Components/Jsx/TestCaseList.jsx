import React from "react";

const TestCaseList = ({ testCases }) => {
  return (
    <div className="test-case-list">
      {testCases.map((testCase) => (
        <div key={testCase.id} className="test-case-item">
          <h3>Test Case {testCase.id}</h3>
          <p>
            <strong>Input:</strong>
          </p>
          <pre>{testCase.input}</pre>
          <p>
            <strong>Expected Output:</strong>
          </p>
          <pre>{testCase.output}</pre>
        </div>
      ))}
    </div>
  );
};

export default TestCaseList;
