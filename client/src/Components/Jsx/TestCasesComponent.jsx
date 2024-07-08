import React, { useState, useEffect } from "react";
import TestCaseList from "./TestCaseList";
import "../Styles/TestCases.css";
import TestCaseForm from "./TestCaseForm";

const TestCasesComponent = (props) => {
  const testCases = [
    [
      {
        id: 1,
        inputs: [
          { name: "Nums", value: [2, 7, 11, 15] },
          { name: "Target", value: [3, 2, 4] },
        ],
        output: [0, 1],
      },
      {
        id: 2,
        inputs: [
          { name: "Nums", value: [3, 2, 4] },
          { name: "Target", value: [6] },
        ],
        output: [1],
      },
    ],

    [
      {
        id: 1,
        inputs: [
          { name: "Difficulty", value: [2, 4, 6, 8, 10] },
          { name: "Profit", value: [10, 20, 30, 40, 50] },
          { name: "Worker", value: [4, 5, 6, 7] },
        ],
        output: [100],
      },
      {
        id: 2,
        inputs: [
          { name: "Difficulty", value: [85, 47, 57] },
          { name: "Profit", value: [24, 66, 99] },
          { name: "Worker", value: [0] },
        ],
        output: [1],
      },
    ],

    [
      {
        id: 1,
        inputs: [
          { name: "Nums1", value: [1, 3] },
          { name: "Nums2", value: [2] },
        ],
        output: [2.0],
      },
      {
        id: 2,
        inputs: [
          { name: "Nums1", value: [1, 2] },
          { name: "Nums2", value: [3, 4] },
        ],
        output: [2.5],
      },
    ],

    [
      {
        id: 1,
        inputs: [{ name: "String", value: ["()"] }],
        output: ["true"],
      },
      {
        id: 2,
        inputs: [{ name: "String", value: ["()[]{}"] }],
        output: ["true"],
      },
    ],

    [
      {
        id: 1,
        inputs: [
          {
            name: "Board",
            value: [
              ["5", "3", ".", ".", "7", ".", ".", ".", "."],
              ["6", ".", ".", "1", "9", "5", ".", ".", "."],
              [".", "9", "8", ".", ".", ".", ".", "6", "."],
              ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
              ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
              ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
              [".", "6", ".", ".", ".", ".", "2", "8", "."],
              [".", ".", ".", "4", "1", "9", ".", ".", "5"],
              [".", ".", ".", ".", "8", ".", ".", "7", "9"],
            ],
          },
        ],
        output: ["true"],
      },
      {
        id: 2,
        inputs: [
          {
            name: "Board",
            value: [
              ["8", "3", ".", ".", "7", ".", ".", ".", "."],
              ["6", ".", ".", "1", "9", "5", ".", ".", "."],
              [".", "9", "8", ".", ".", ".", ".", "6", "."],
              ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
              ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
              ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
              [".", "6", ".", ".", ".", ".", "2", "8", "."],
              [".", ".", ".", "4", "1", "9", ".", ".", "5"],
              [".", ".", ".", ".", "8", ".", ".", "7", "9"],
            ],
          },
        ],
        output: ["false"],
      },
    ],

    [
      {
        id: 1,
        inputs: [
          { name: "Candidates", value: [2, 3, 6, 7] },
          { name: "Target", value: [7] },
        ],
        output: [[" ", 2, " ", 2, " ", 3], "\n", [7]],
      },
      {
        id: 2,
        inputs: [
          { name: "Candidates", value: [2, 3, 5] },
          { name: "Target", value: [8] },
        ],
        output: [
          [[" ", 2, " ", 2, " ", 2, " ", 2]],
          "\n",
          [2, " ", 3, " ", 3],
          "\n",
          [3, " ", 5],
        ],
      },
      {
        id: 3,
        inputs: [
          { name: "Candidates", value: [2] },
          { name: "Target", value: [1] },
        ],
        output: ["[]"],
      },
    ],

    [
      {
        id: 1,
        inputs: [{ name: "Nums", value: [2, 3, 1, 1, 4] }],
        output: [2],
      },
      {
        id: 2,
        inputs: [{ name: "Nums", value: [2, 3, 0, 1, 4] }],
        output: [2],
      },
    ],

    [
      {
        id: 1,
        inputs: [
          { name: "Num1", value: ['"2"'] },
          { name: "Num2", value: ['"3"'] },
        ],
        output: ['"6"'],
      },
      {
        id: 2,
        inputs: [
          { name: "Num1", value: ['"123"'] },
          { name: "Num2", value: ['"456"'] },
        ],
        output: ['"56088"'],
      },
    ],

    [
      {
        id: 1,
        inputs: [
          {
            name: "Matrix",
            value: [
              [" ", 1, " ", 2, " ", 3, "\n"],
              [4, " ", 5, " ", 6, "\n"],
              [7, " ", 8, " ", 9, "\n"],
            ],
          },
        ],
        output: [
          [" ", 7, " ", 4, " ", 1, "\n"],
          [8, " ", 5, " ", 2, "\n"],
          [9, " ", 6, " ", 3, "\n"],
        ],
      },
      {
        id: 2,
        inputs: [
          {
            name: "Matrix",
            value: [
              [" ", 5, " ", 1, " ", 9, " ", 11, "\n"],
              [2, " ", 4, " ", 8, " ", 10, "\n"],
              [13, " ", 3, " ", 6, " ", 7, "\n"],
              [15, " ", 14, " ", 12, " ", 16, "\n"],
            ],
          },
        ],
        output: [
          [" ", 15, " ", 13, " ", 2, " ", 5, " ", "\n"],
          [14, " ", 3, " ", 4, " ", 1, " ", "\n"],
          [12, " ", 6, " ", 8, " ", 9, " ", "\n"],
          [16, " ", 7, " ", 10, " ", 11, " ", "\n"],
        ],
      },
    ],
  ];

  useEffect(() => {
    console.log("Props received in TestCasesComponent:", props);
  }, [props]);

  // Parse id to integer, fallback to 0 if NaN
  const testCaseIndex = parseInt(props.index, 10) || 0;

  console.log("testCaseIndex:", testCaseIndex);

  return (
    <div className="test-cases-component">
      <h2>Sample Test Cases</h2>

      {testCases[testCaseIndex] && testCaseIndex !== 4 ? (
        <TestCaseList testCases={testCases[testCaseIndex]} />
      ) : (
        <>
          <p>Testcases not available :(</p>
          <p>Kindly Check the examples given for a clearer undertanding</p>
          <p>Mail us at: ipranavprashant@gmail.com for letting us know.</p>
        </>
      )}

      {/* Additional rendering for the board test cases */}
      {testCases[4] && testCaseIndex === 4 && (
        <div>
          {testCases[4].map((testCase) => (
            <div key={testCase.id} className="board-test-case">
              <h3>Test Case {testCase.id}</h3>
              <pre>
                {testCase.inputs[0].value.map((row, rowIndex) => (
                  <div key={rowIndex}>{row.join(" ")}</div>
                ))}
              </pre>
              <p>
                <b>Expected Output: </b> {testCase.output}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestCasesComponent;
