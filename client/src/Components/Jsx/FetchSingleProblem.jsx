import React from "react";
import { useParams } from "react-router-dom";
import TestCasesComponent from "./TestCasesComponent";
import Navbar from "./Navbar";
import Editor from "./Editor";
import Footer from "./Footer";
import "../Styles/FetchSingleProblem.css";

const problems = [
  [
    <>
      <h1>Two Sum</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Given an array of integers <code>nums</code>&nbsp;and an integer{" "}
          <code>target</code>, return{" "}
          <em>
            indices of the two numbers such that they add up to{" "}
            <code>target</code>
          </em>
          .
        </p>
        <p>
          You may assume that each input would have{" "}
          <strong>
            <em>exactly</em> one solution
          </strong>
          , and you may not use the <em>same</em> element twice.
        </p>
        <p>You can return the answer in any order.</p>
        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>
        <pre>
          <strong>Input:</strong> nums = [2,7,11,15], target = 9
          <br />
          <br />
          <strong>Output:</strong> [0,1]
          <br />
          <br />
          <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we
          return [0, 1].
        </pre>
        <p>
          <strong className="example">Example 2:</strong>
        </p>
        <pre>
          <strong>Input:</strong> nums = [3,2,4], target = 6
          <br />
          <br />
          <strong>Output:</strong> [1,2]
        </pre>
        <p>
          <strong className="example">Example 3:</strong>
        </p>
        <pre>
          <strong>Input:</strong> nums = [3,3], target = 6
          <br />
          <br />
          <strong>Output:</strong> [0,1]
        </pre>
        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>
        <ul>
          <li>
            <code>
              2 &lt;= nums.length &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>
              -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
            </code>
          </li>
          <li>
            <code>
              -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
            </code>
          </li>
          <li>
            <strong>Only one valid answer exists.</strong>
          </li>
        </ul>
        <p>&nbsp;</p>
        <strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that
        is less than{" "}
        <code>
          O(n<sup>2</sup>)
        </code>
        <font face="monospace">&nbsp;</font>time complexity?
      </div>
    </>,
  ],
  [
    <div className="Question">
      <h1>Most Profit Assigning Work</h1>
      <p>
        <div className="elfjS" data-track-load="description_content">
          <p>
            You have <code>n</code> jobs and <code>m</code> workers. You are
            given three arrays: <code>difficulty</code>, <code>profit</code>,
            and
            <code>worker</code> where:
          </p>

          <ul>
            <li>
              <code>difficulty[i]</code> and <code>profit[i]</code> are the
              difficulty and the profit of the{" "}
              <code>
                i<sup>th</sup>
              </code>{" "}
              job, and
            </li>
            <li>
              <code>worker[j]</code> is the ability of{" "}
              <code>
                j<sup>th</sup>
              </code>{" "}
              worker (i.e., the{" "}
              <code>
                j<sup>th</sup>
              </code>{" "}
              worker can only complete a job with difficulty at most{" "}
              <code>worker[j]</code>).
            </li>
          </ul>

          <p>
            Every worker can be assigned <strong>at most one job</strong>, but
            one job can be <strong>completed multiple times</strong>.
          </p>

          <ul>
            <li>
              For example, if three workers attempt the same job that pays{" "}
              <code>$1</code>, then the total profit will be <code>$3</code>. If
              a worker cannot complete any job, their profit is <code>$0</code>.
            </li>
          </ul>

          <p>
            Return the maximum profit we can achieve after assigning the workers
            to the jobs.
          </p>

          <p>&nbsp;</p>
          <p>
            <strong className="example">Example 1:</strong>
          </p>

          <pre>
            <strong>Input:</strong> difficulty = [2,4,6,8,10], profit =
            [10,20,30,40,50], worker = [4,5,6,7]
            <br />
            <br />
            <strong>Output:</strong> 100
            <br />
            <br />
            <strong>Explanation:</strong> Workers are assigned jobs of
            difficulty [4,4,6,6] and they get a profit of [20,20,30,30]
            separately.
          </pre>

          <p>
            <strong className="example">Example 2:</strong>
          </p>

          <pre>
            <strong>Input:</strong> difficulty = [85,47,57], profit =
            [24,66,99], worker = [40,25,25]
            <br />
            <br />
            <strong>Output:</strong> 0
          </pre>

          <p>&nbsp;</p>
          <p>
            <strong>Constraints:</strong>
          </p>

          <ul>
            <li>
              <code>n == difficulty.length</code>
            </li>
            <li>
              <code>n == profit.length</code>
            </li>
            <li>
              <code>m == worker.length</code>
            </li>
            <li>
              <code>
                1 &lt;= n, m &lt;= 10<sup>4</sup>
              </code>
            </li>
            <li>
              <code>
                1 &lt;= difficulty[i], profit[i], worker[i] &lt;= 10<sup>5</sup>
              </code>
            </li>
          </ul>
        </div>
        <TestCasesComponent />
      </p>
    </div>,
  ],
  [
    <>
      <h1>Median Of Two Sorted Arrays</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Given two sorted arrays <code>nums1</code> and <code>nums2</code> of
          size <code>m</code> and <code>n</code> respectively, return{" "}
          <strong>the median</strong> of the two sorted arrays.
        </p>

        <p>
          The overall run time complexity should be <code>O(log (m+n))</code>.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums1 = [1,3], nums2 = [2]
          <br />
          <br />
          <strong>Output:</strong> 2.00000
          <br />
          <br />
          <strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
          <br />
          <br />
          <strong>Output:</strong> 2.50000
          <br />
          <br />
          <strong>Explanation:</strong> merged array = [1,2,3,4] and median is
          (2 + 3) / 2 = 2.5.
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>nums1.length == m</code>
          </li>
          <li>
            <code>nums2.length == n</code>
          </li>
          <li>
            <code>0 &lt;= m &lt;= 1000</code>
          </li>
          <li>
            <code>0 &lt;= n &lt;= 1000</code>
          </li>
          <li>
            <code>1 &lt;= m + n &lt;= 2000</code>
          </li>
          <li>
            <code>
              -10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup>
            </code>
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Valid Parenthesis</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Given a string <code>s</code> containing just the characters{" "}
          <code>'('</code>, <code>')'</code>, <code>'{"</code>, <code>"}'</code>
          , <code>'['</code> and <code>']'</code>, determine if the input string
          is valid.
        </p>

        <p>An input string is valid if:</p>

        <ol>
          <li>Open brackets must be closed by the same type of brackets.</li>
          <li>Open brackets must be closed in the correct order.</li>
          <li>
            Every close bracket has a corresponding open bracket of the same
            type.
          </li>
          <li>
            Return string "true" or "false" as the answer and not boolean!
          </li>
        </ol>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input:</strong> s = "()"
          <br />
          <br />
          <strong>Output:</strong> true
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> s = "()[]{}"
          <br />
          <br />
          <strong>Output:</strong> true
        </pre>

        <p>
          <strong className="example">Example 3:</strong>
        </p>

        <pre>
          <strong>Input:</strong> s = "(]"
          <br />
          <br />
          <strong>Output:</strong> false
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= s.length &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>s</code> consists of parentheses only <code>'()[]{}'</code>.
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Valid Sudoku</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Determine if a&nbsp;<code>9 x 9</code> Sudoku board&nbsp;is
          valid.&nbsp;Only the filled cells need to be validated&nbsp;
          <strong>according to the following rules</strong>:
        </p>

        <ol>
          <li>
            Each row&nbsp;must contain the&nbsp;digits&nbsp;<code>1-9</code>{" "}
            without repetition.
          </li>
          <li>
            Each column must contain the digits&nbsp;<code>1-9</code>
            &nbsp;without repetition.
          </li>
          <li>
            Each of the nine&nbsp;<code>3 x 3</code> sub-boxes of the grid must
            contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.
          </li>
        </ol>

        <p>
          <strong>Note:</strong>
        </p>

        <ul>
          <li>
            A Sudoku board (partially filled) could be valid but is not
            necessarily solvable.
          </li>
          <li>
            Only the filled cells need to be validated according to the
            mentioned&nbsp;rules.
          </li>
        </ul>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png"
          //   style="height: 250px; width: 250px;"
          alt="dummy.img"
        />
        <pre>
          <strong>Input:</strong> board = [["5","3",".",".","7",".",".",".","."]
          ,["6",".",".","1","9","5",".",".","."]
          ,[".","9","8",".",".",".",".","6","."]
          ,["8",".",".",".","6",".",".",".","3"]
          ,["4",".",".","8",".","3",".",".","1"]
          ,["7",".",".",".","2",".",".",".","6"]
          ,[".","6",".",".",".",".","2","8","."]
          ,[".",".",".","4","1","9",".",".","5"]
          ,[".",".",".",".","8",".",".","7","9"]]
          <br />
          <br />
          <strong>Output:</strong> true
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> board = [["8","3",".",".","7",".",".",".","."]
          ,["6",".",".","1","9","5",".",".","."]
          ,[".","9","8",".",".",".",".","6","."]
          ,["8",".",".",".","6",".",".",".","3"]
          ,["4",".",".","8",".","3",".",".","1"]
          ,["7",".",".",".","2",".",".",".","6"]
          ,[".","6",".",".",".",".","2","8","."]
          ,[".",".",".","4","1","9",".",".","5"]
          ,[".",".",".",".","8",".",".","7","9"]]
          <br />
          <br />
          <strong>Output:</strong> false
          <br />
          <br />
          <strong>Explanation:</strong> Same as Example 1, except with the{" "}
          <strong>5</strong> in the top left corner being modified to{" "}
          <strong>8</strong>. Since there are two 8's in the top left 3x3
          sub-box, it is invalid.
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>board.length == 9</code>
          </li>
          <li>
            <code>board[i].length == 9</code>
          </li>
          <li>
            <code>board[i][j]</code> is a digit <code>1-9</code> or{" "}
            <code>'.'</code>.
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Combination Sum</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Given an array of <strong>distinct</strong> integers{" "}
          <code>candidates</code> and a target integer <code>target</code>,
          return{" "}
          <em>
            a list of all <strong>unique combinations</strong> of{" "}
          </em>
          <code>candidates</code>
          <em> where the chosen numbers sum to </em>
          <code>target</code>
          <em>.</em> You may return the combinations in{" "}
          <strong>any order</strong>.
        </p>

        <p>
          The <strong>same</strong> number may be chosen from{" "}
          <code>candidates</code> an <strong>unlimited number of times</strong>.
          Two combinations are unique if the{" "}
          <span
            data-keyword="frequency-array"
            className=" cursor-pointer relative text-dark-blue-s text-sm"
          >
            <div
              className="popover-wrapper inline-block"
              data-headlessui-state=""
            >
              <div>
                <div
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:rk:"
                >
                  <div>frequency</div>
                </div>
                {/* <div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(57px, 324px);"></div> */}
              </div>
            </div>
          </span>{" "}
          of at least one of the chosen numbers is different.
        </p>

        <p>
          The test cases are generated such that the number of unique
          combinations that sum up to <code>target</code> is less than{" "}
          <code>150</code> combinations for the given input.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input:</strong> candidates = [2,3,6,7], target = 7
          <br />
          <br />
          <strong>Output:</strong> [[2,2,3],[7]]
          <br />
          <br />
          <strong>Explanation:</strong>2 and 3 are candidates, and 2 + 2 + 3 =
          7. Note that 2 can be used multiple times. 7 is a candidate, and 7 =
          7. These are the only two combinations.
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> candidates = [2,3,5], target = 8
          <br />
          <br />
          <strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]
        </pre>

        <p>
          <strong className="example">Example 3:</strong>
        </p>

        <pre>
          <strong>Input:</strong> candidates = [2], target = 1
          <br />
          <br />
          <strong>Output:</strong> []
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>1 &lt;= candidates.length &lt;= 30</code>
          </li>
          <li>
            <code>2 &lt;= candidates[i] &lt;= 40</code>
          </li>
          <li>
            All elements of <code>candidates</code> are{" "}
            <strong>distinct</strong>.
          </li>
          <li>
            <code>1 &lt;= target &lt;= 40</code>
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Jump Game II</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          You are given a <strong>0-indexed</strong> array of integers{" "}
          <code>nums</code> of length <code>n</code>. You are initially
          positioned at <code>nums[0]</code>.
        </p>

        <p>
          Each element <code>nums[i]</code> represents the maximum length of a
          forward jump from index <code>i</code>. In other words, if you are at{" "}
          <code>nums[i]</code>, you can jump to any <code>nums[i + j]</code>{" "}
          where:
        </p>

        <ul>
          <li>
            <code>0 &lt;= j &lt;= nums[i]</code> and
          </li>
          <li>
            <code>i + j &lt; n</code>
          </li>
        </ul>

        <p>
          Return <em>the minimum number of jumps to reach </em>
          <code>nums[n - 1]</code>. The test cases are generated such that you
          can reach <code>nums[n - 1]</code>.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums = [2,3,1,1,4]
          <br />
          <br />
          <strong>Output:</strong> 2
          <br />
          <br />
          <strong>Explanation:</strong> The minimum number of jumps to reach the
          last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the
          last index.
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums = [2,3,0,1,4]
          <br />
          <br />
          <strong>Output:</strong> 2
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= nums.length &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>0 &lt;= nums[i] &lt;= 1000</code>
          </li>
          <li>
            It's guaranteed that you can reach <code>nums[n - 1]</code>.
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Multiply Strings</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Given two non-negative integers <code>num1</code> and{" "}
          <code>num2</code> represented as strings, return the product of{" "}
          <code>num1</code> and <code>num2</code>, also represented as a string.
        </p>

        <p>
          <strong>Note:</strong>&nbsp;You must not use any built-in BigInteger
          library or convert the inputs to integer directly.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>
        <pre>
          <strong>Input:</strong> num1 = "2", num2 = "3"
          <br />
          <br />
          <strong>Output:</strong> "6"
        </pre>
        <p>
          <strong className="example">Example 2:</strong>
        </p>
        <pre>
          <strong>Input:</strong> num1 = "123", num2 = "456"
          <br />
          <br />
          <strong>Output:</strong> "56088"
        </pre>
        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>1 &lt;= num1.length, num2.length &lt;= 200</code>
          </li>
          <li>
            <code>num1</code> and <code>num2</code> consist of digits only.
          </li>
          <li>
            Both <code>num1</code> and <code>num2</code>&nbsp;do not contain any
            leading zero, except the number <code>0</code> itself.
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Rotate Image</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          You are given an <code>n x n</code> 2D <code>matrix</code>{" "}
          representing an image, rotate the image by <strong>90</strong> degrees
          (clockwise).
        </p>

        <p>
          You have to rotate the image , which means you have to modify the
          input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D
          matrix and do the rotation.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg"
          //   style="width: 500px; height: 188px;"
          alt1="haha.png"
        />
        <pre>
          <strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
          <br />
          <br />
          <strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg"
          //   style="width: 500px; height: 201px;"
          alt3="dummy.img"
        />
        <pre>
          <strong>Input:</strong> matrix =
          [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
          <br />
          <br />
          <strong>Output:</strong>{" "}
          [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>n == matrix.length == matrix[i].length</code>
          </li>
          <li>
            <code>1 &lt;= n &lt;= 20</code>
          </li>
          <li>
            <code>-1000 &lt;= matrix[i][j] &lt;= 1000</code>
          </li>
        </ul>
      </div>
    </>,
  ],
  [
    <>
      <h1>Trapping Rain Water</h1>
      <div className="elfjS" data-track-load="description_content">
        <p>
          Given <code>n</code> non-negative integers representing an elevation
          map where the width of each bar is <code>1</code>, compute how much
          water it can trap after raining.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong className="example">Example 1:</strong>
        </p>
        <img
          src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png"
          //   style="width: 412px; height: 161px;"
          alt="dummy.img"
        />
        <pre>
          <strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
          [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
          <br />
          <br />
          <strong>Output:</strong> 6
          [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
          <br />
          <br />
          <strong>Explanation:</strong> The above elevation map (black section)
          is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6
          units of rain water (blue section) are being trapped.
        </pre>

        <p>
          <strong className="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> height = [4,2,0,3,2,5]
          [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
          <br />
          <br />
          <strong>Output:</strong> 9
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>n == height.length</code>
          </li>
          <li>
            <code>
              1 &lt;= n &lt;= 2 * 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>
              0 &lt;= height[i] &lt;= 10<sup>5</sup>
            </code>
          </li>
        </ul>
      </div>
    </>,
  ],
];

const FetchSingleProblem = () => {
  const { id } = useParams();
  //   if (!id) return <>{problems[0]}</>; //commented because I have implemented it in the body

  //   const index = parseInt(id, 10); // Convert id to a number

  //   if (index < 0 || index >= problems.length) {
  //     return <div>Problem not found</div>;
  //   }

  return (
    <div>
      <Navbar />
      <div className="app">
        <div className="question-section">
          {!id ? problems[0] : problems[id]}
          <TestCasesComponent index={id} />
        </div>
        <div className="editor-section">
          <Editor />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FetchSingleProblem;
