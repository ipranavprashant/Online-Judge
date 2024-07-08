import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Choose your preferred style
import Select from "react-select";
import "../Styles/Editorial.css";
import Navbar from "./Navbar";
import CopyToClipboard from "react-copy-to-clipboard";
import Footer from "./Footer";
// Define your solution functions
const solutions = [
  [
    // Solutions for parameter 0
    // 00: C++
    `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> twoSum(int n, int target, vector<int>& arr) {
    unordered_map<int, int> num_map;

    for (int i = 0; i < n; ++i) {
        int complement = target - arr[i];
        if (num_map.find(complement) != num_map.end()) {
            return { num_map[complement], i };
        }
        num_map[arr[i]] = i;
    }
    return {}; // No valid indices found
}

int main() {
    int n, target;
    cin >> n >> target;
    vector<int> arr(n);
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    vector<int> result = twoSum(n, target, arr);
    
    for (int i : result) {
        cout << i << " ";
    }
    
    return 0;
}
`,
    // 01: Python
    `def twoSum(n, target, arr):
    num_map = {}
    
    for i in range(n):
        complement = target - arr[i]
        if complement in num_map:
            return [num_map[complement], i]
        num_map[arr[i]] = i
    
    return []  # No valid indices found

if __name__ == "__main__":
    n, target = map(int, input().strip().split())
    arr = list(map(int, input().strip().split()))
    
    result = twoSum(n, target, arr)
    
    for i in result:
        print(i, end=" ")

`,
    // 02: Java
    `public class Solution0Java {
    // Solution for userparam = 0 in Java
    public static int[] twoSum(int n, int target, int[] arr) {
        HashMap<Integer, Integer> numMap = new HashMap<>();

        for (int i = 0; i < n; ++i) {
            int complement = target - arr[i];
            if (numMap.containsKey(complement)) {
                return new int[] { numMap.get(complement), i };
            }
            numMap.put(arr[i], i);
        }
        return new int[] {}; // No valid indices found
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int target = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; ++i) {
            arr[i] = scanner.nextInt();
        }

        int[] result = twoSum(n, target, arr);

        for (int i : result) {
            System.out.print(i + " ");
        }
    }
}
`,
    // 03: JavaScript
    `function solution0JavaScript() {
    // Solution for userparam = 0 in JavaScript
    const twoSum = (n, target, arr) => {
        const numMap = new Map();
        
        for (let i = 0; i < n; ++i) {
            const complement = target - arr[i];
            if (numMap.has(complement)) {
                return [numMap.get(complement), i];
            }
            numMap.set(arr[i], i);
        }
        return []; // No valid indices found
    }

    const main = () => {
        const input = require('readline-sync');
        const n = parseInt(input.question());
        const target = parseInt(input.question());
        const arr = input.question().split(' ').map(Number);

        const result = twoSum(n, target, arr);

        console.log(result.join(' '));
    }

    main();
}
`,
  ],
  [
    // Solutions for parameter 1
    // 10: C++
    `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit, vector<int>& worker) {
        int res = 0, j = 0, best = 0;
        vector<pair<int, int>> temp;
        for(int i = 0; i < difficulty.size(); ++i) {
            temp.push_back({difficulty[i], profit[i]});
        }

        for (int work : worker) {
            while(j < temp.size() && work >= temp[j].first) {
                best = max(best, temp[j].second);
                j++;
            }
            res += best;
        }

        return res;
    }
};

int main() {
    int n, m;
    
    cin >> n;
    vector<int> difficulty(n), profit(n);
    for (int i = 0; i < n; ++i) {
        cin >> difficulty[i];
    }
    for (int i = 0; i < n; ++i) {
        cin >> profit[i];
    }
    
    cin >> m;
    vector<int> worker(m);
    for (int i = 0; i < m; ++i) {
        cin >> worker[i];
    }
    sort(difficulty.begin(),difficulty.end());
        sort(profit.begin(),profit.end());
        sort(worker.begin(),worker.end());
    Solution sol;
    int result = sol.maxProfitAssignment(difficulty, profit, worker);
    
    cout << result << endl;
    
    return 0;
}
`,
    // 11: Python
    `def solution1Python():
    # Solution for userparam = 1 in Python
    print("Calling solution 1 in Python")

solution1Python()
`,
    // 12: Java
    `public class Solution1Java {
    // Solution for userparam = 1 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 1 in Java");
    }
}`,
    // 13: JavaScript
    `function solution1JavaScript() {
    // Solution for userparam = 1 in JavaScript
    console.log("Calling solution 1 in JavaScript");
}

solution1JavaScript();
`,
  ],
  [
    // Solutions for parameter 2
    // 20: C++
    `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    int m = nums1.size();
    int n = nums2.size();
    
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int left = 0, right = m, half_len = (m + n + 1) / 2;
    while (left <= right) {
        int i = (left + right) / 2;
        int j = half_len - i;
        
        if (i < right && nums2[j-1] > nums1[i]) {
            left = i + 1; 
        } else if (i > left && nums1[i-1] > nums2[j]) {
            right = i - 1; 
        } else { 
            int max_left = 0;
            if (i == 0) max_left = nums2[j-1]; 
            else if (j == 0) max_left = nums1[i-1]; 
            else max_left = max(nums1[i-1], nums2[j-1]);
            
            if ((m + n) % 2 == 1) return max_left;
            
            int min_right = 0;
            if (i == m) min_right = nums2[j]; 
            else if (j == n) min_right = nums1[i]; 
            else min_right = min(nums2[j], nums1[i]);
            
            return (max_left + min_right) / 2.0;
        }
    }
    return 0.0;
}

int main() {
    int m, n;
    cin >> m;
    
    vector<int> nums1(m);
    for (int i = 0; i < m; ++i) {
        cin >> nums1[i];
    }
    
    cin >> n;
    
    vector<int> nums2(n);
    for (int i = 0; i < n; ++i) {
        cin >> nums2[i];
    }
    
    double median = findMedianSortedArrays(nums1, nums2);
    cout << median << endl;

    return 0;
}
`,
    // 21: Python
    `def findMedianSortedArrays(nums1, nums2):
    m = len(nums1)
    n = len(nums2)
    
    if m > n:
        return findMedianSortedArrays(nums2, nums1)
    
    left, right = 0, m
    half_len = (m + n + 1) // 2
    
    while left <= right:
        i = (left + right) // 2
        j = half_len - i
        
        if i < right and nums2[j - 1] > nums1[i]:
            left = i + 1
        elif i > left and nums1[i - 1] > nums2[j]:
            right = i - 1
        else:
            max_left = 0
            if i == 0:
                max_left = nums2[j - 1]
            elif j == 0:
                max_left = nums1[i - 1]
            else:
                max_left = max(nums1[i - 1], nums2[j - 1])
            
            if (m + n) % 2 == 1:
                return max_left
            
            min_right = 0
            if i == m:
                min_right = nums2[j]
            elif j == n:
                min_right = nums1[i]
            else:
                min_right = min(nums2[j], nums1[i])
            
            return (max_left + min_right) / 2.0
    
    return 0.0

if __name__ == "__main__":
    m = int(input().strip())
    nums1 = list(map(int, input().strip().split()))
    n = int(input().strip())
    nums2 = list(map(int, input().strip().split()))
    
    median = findMedianSortedArrays(nums1, nums2)
    print(median)

`,
    // 22: Java
    `public class Solution2Java {
    // Solution for userparam = 2 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 2 in Java");
    }
}`,
    // 23: JavaScript
    `function solution2JavaScript() {
    // Solution for userparam = 2 in JavaScript
    console.log("Calling solution 2 in JavaScript");
}

solution2JavaScript();
`,
  ],
  [
    // Solutions for parameter 3
    // 30: C++
    `#include <iostream>
#include <stack>
#include <unordered_map>
#include <string>

using namespace std;

bool isValid(string s) {
    stack<char> parentheses;
    unordered_map<char, char> matchingParen = {
        {')', '('},
        {'}', '{'},
        {']', '['}
    };

    for (char& c : s) {
        if (c == '(' || c == '{' || c == '[') {
            parentheses.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (parentheses.empty() || parentheses.top() != matchingParen[c]) {
                return false;
            } else {
                parentheses.pop();
            }
        }
    }

    return parentheses.empty();
}

int main() {
    string input;
    getline(cin, input);

    if (isValid(input)) {
        cout << "true" << endl;
    } else {
        cout << "false" << endl;
    }

    return 0;
}
`,
    // 31: Python
    `def isValid(s):
    stack = []
    matching_paren = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    for c in s:
        if c in {'(', '{', '['}:
            stack.append(c)
        elif c in {')', '}', ']'}:
            if not stack or stack[-1] != matching_paren[c]:
                return False
            else:
                stack.pop()
    
    return len(stack) == 0

if __name__ == "__main__":
    input_str = input().strip()
    
    if isValid(input_str):
        print("true")
    else:
        print("false")

`,
    // 32: Java
    `public class Solution3Java {
    // Solution for userparam = 3 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 3 in Java");
    }
}`,
    // 33: JavaScript
    `function solution3JavaScript() {
    // Solution for userparam = 3 in JavaScript
    console.log("Calling solution 3 in JavaScript");
}

solution3JavaScript();
`,
  ],
  [
    // Solutions for parameter 4
    // 40: C++
    `#include <iostream>
using namespace std;

void solution4Cpp() {
    // Solution for userparam = 4 in C++
    cout << "Calling solution 4 in C++" << endl;
}

int main() {
    solution4Cpp();
    return 0;
}`,
    // 41: Python
    `def solution4Python():
    # Solution for userparam = 4 in Python
    print("Calling solution 4 in Python")

solution4Python()
`,
    // 42: Java
    `public class Solution4Java {
    // Solution for userparam = 4 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 4 in Java");
    }
}`,
    // 43: JavaScript
    `function solution4JavaScript() {
    // Solution for userparam = 4 in JavaScript
    console.log("Calling solution 4 in JavaScript");
}

solution4JavaScript();
`,
  ],
  [
    // Solutions for parameter 5
    // 50: C++
    `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;
        vector<int> current;
        sort(candidates.begin(), candidates.end()); // Sort candidates to handle duplicates

        backtrack(result, candidates, current, target, 0);
        return result;
    }

private:
    void backtrack(vector<vector<int>>& result, vector<int>& candidates, vector<int>& current, int target, int start) {
        if (target < 0) {
            return;
        } else if (target == 0) {
            result.push_back(current);
            return;
        } else {
            for (int i = start; i < candidates.size(); ++i) {
                current.push_back(candidates[i]);
                backtrack(result, candidates, current, target - candidates[i], i);
                current.pop_back();
            }
        }
    }
};

int main() {
    int n, target;
    cin >> n;
    vector<int> candidates(n);
    for (int i = 0; i < n; ++i) {
        cin >> candidates[i];
    }
    cin >> target;

    Solution sol;
    vector<vector<int>> result = sol.combinationSum(candidates, target);

    if (result.empty()) {
        cout << "[]" << endl;
    } else {
        cout << "[";
        for (int i = 0; i < result.size(); ++i) {
            cout << "[";
            for (int j = 0; j < result[i].size(); ++j) {
                cout << result[i][j];
                if (j < result[i].size() - 1) cout << ",";
            }
            cout << "]";
            if (i < result.size() - 1) cout << ",";
        }
        cout << "]" << endl;
    }

    return 0;
}`,
    // 51: Python
    `class Solution:
    def combinationSum(self, candidates, target):
        result = []
        current = []
        candidates.sort()  # Sort candidates to handle duplicates
        
        self.backtrack(result, candidates, current, target, 0)
        return result
    
    def backtrack(self, result, candidates, current, target, start):
        if target < 0:
            return
        elif target == 0:
            result.append(current[:])
            return
        else:
            for i in range(start, len(candidates)):
                current.append(candidates[i])
                self.backtrack(result, candidates, current, target - candidates[i], i)
                current.pop()

if __name__ == "__main__":
    n = int(input().strip())
    candidates = list(map(int, input().strip().split()))
    target = int(input().strip())
    
    sol = Solution()
    result = sol.combinationSum(candidates, target)
    
    if not result:
        print("[]")
    else:
        print("[", end="")
        for i in range(len(result)):
            print("[", end="")
            for j in range(len(result[i])):
                print(result[i][j], end="")
                if j < len(result[i]) - 1:
                    print(",", end="")
            print("]", end="")
            if i < len(result) - 1:
                print(",", end="")
        print("]")
`,
    // 52: Java
    `public class Solution5Java {
    // Solution for userparam = 5 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 5 in Java");
    }
}`,
    // 53: JavaScript
    `function solution5JavaScript() {
    // Solution for userparam = 5 in JavaScript
    console.log("Calling solution 5 in JavaScript");
}

solution5JavaScript();
`,
  ],
  [
    // Solutions for parameter 6
    // 60: C++
    `#include <iostream>
#include <vector>
#include <limits>

using namespace std;

int minJumps(vector<int>& nums) {
    int n = nums.size();
    if (n <= 1) return 0;
    
    int jumps = 0;
    int currentEnd = 0;
    int farthest = 0; 
    
    for (int i = 0; i < n - 1; ++i) {
        farthest = max(farthest, i + nums[i]);
        
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
            if (currentEnd >= n - 1) break;
        }
    }
    
    return jumps;
}

int main() {
    int n;
    cin >> n;
    
    vector<int> nums(n);
    for (int i = 0; i < n; ++i) {
        cin >> nums[i];
    }
    
    int jumps = minJumps(nums);
    
    cout<< jumps << endl;
    
    return 0;
}
`,
    // 61: Python
    `def minJumps(nums):
    n = len(nums)
    if n <= 1:
        return 0
    
    jumps = 0
    current_end = 0
    farthest = 0
    
    for i in range(n - 1):
        farthest = max(farthest, i + nums[i])
        
        if i == current_end:
            jumps += 1
            current_end = farthest
            if current_end >= n - 1:
                break
    
    return jumps

if __name__ == "__main__":
    n = int(input().strip())
    nums = list(map(int, input().strip().split()))
    
    jumps = minJumps(nums)
    
    print(jumps)

`,
    // 62: Java
    `public class Solution6Java {
    // Solution for userparam = 6 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 6 in Java");
    }
}`,
    // 63: JavaScript
    `function solution6JavaScript() {
    // Solution for userparam = 6 in JavaScript
    console.log("Calling solution 6 in JavaScript");
}

solution6JavaScript();
`,
  ],
  [
    // Solutions for parameter 7
    // 70: C++
    `#include <iostream>
#include <string>
#include <vector>
using namespace std;

string multiplyStrings(string num1, string num2) {
        string ans = "";
        if (num1 == "0" || num2 == "0")
            return "0";
        vector<int> ansArr(num1.length() + num2.length(), 0);
        for (int i = num1.length() - 1; i >= 0; i--) {
            for (int j =  num2.length() - 1; j >= 0; j--) {
                ansArr[i + j + 1] += (num1[i] - '0') * (num2[j] - '0');
                ansArr[i + j] += ansArr[i + j + 1] / 10;
                ansArr[i + j + 1] =  ansArr[i + j + 1] % 10; 
            }
        }
        int startNum = (ansArr[0] == 0) ? 1 : 0;
        while (startNum < ansArr.size())
            ans += to_string(ansArr[startNum++]);
        return ans;
    }

int main() {
    string num1, num2;
    cin >> num1 >> num2;
    cout << multiplyStrings(num1, num2) << endl;

    return 0;
}
`,
    // 71: Python
    `def multiplyStrings(num1, num2):
    if num1 == "0" or num2 == "0":
        return "0"
    
    n1, n2 = len(num1), len(num2)
    ansArr = [0] * (n1 + n2)
    
    for i in range(n1 - 1, -1, -1):
        for j in range(n2 - 1, -1, -1):
            digit1 = int(num1[i])
            digit2 = int(num2[j])
            product = digit1 * digit2
            sum_val = product + ansArr[i + j + 1]
            ansArr[i + j] += sum_val // 10
            ansArr[i + j + 1] = sum_val % 10
    
    start_idx = 0
    while start_idx < len(ansArr) and ansArr[start_idx] == 0:
        start_idx += 1
    
    ans = "".join(map(str, ansArr[start_idx:]))
    return ans

if __name__ == "__main__":
    num1 = input().strip()
    num2 = input().strip()
    print(multiplyStrings(num1, num2))

`,
    // 72: Java
    `public class Solution7Java {
    // Solution for userparam = 7 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 7 in Java");
    }
}`,
    // 73: JavaScript
    `function solution7JavaScript() {
    // Solution for userparam = 7 in JavaScript
    console.log("Calling solution 7 in JavaScript");
}

solution7JavaScript();
`,
  ],
  [
    // Solutions for parameter 8
    // 80: C++
    `#include <iostream>
#include <vector>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();

    for (int i = 0; i < n; ++i) {
        for (int j = i; j < n; ++j) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }

    for (int i = 0; i < n; ++i) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}

int main() {
    int n;
    cin >> n;

    vector<vector<int>> matrix(n, vector<int>(n));

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            cin >> matrix[i][j];
        }
    }

    rotate(matrix);

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            cout << matrix[i][j];
            if (j < n - 1) cout << " ";
        }
        cout << endl;
    }

    return 0;
}
`,
    // 81: Python
    `def rotate(matrix):
    n = len(matrix)
    
    # Transpose the matrix
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()

if __name__ == "__main__":
    n = int(input().strip())
    matrix = []
    for i in range(n):
        row = list(map(int, input().strip().split()))
        matrix.append(row)
    
    rotate(matrix)
    
    for i in range(n):
        for j in range(n):
            print(matrix[i][j], end="")
            if j < n - 1:
                print(" ", end="")
        print()

`,
    // 82: Java
    `public class Solution8Java {
    // Solution for userparam = 8 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 8 in Java");
    }
}`,
    // 83: JavaScript
    `function solution8JavaScript() {
    // Solution for userparam = 8 in JavaScript
    console.log("Calling solution 8 in JavaScript");
}

solution8JavaScript();
`,
  ],
  [
    // Solutions for parameter 9
    // 90: C++
    `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        if (n == 0) return 0;
        
        vector<int> leftMax(n, 0), rightMax(n, 0);
        
        leftMax[0] = height[0];
        for (int i = 1; i < n; ++i) {
            leftMax[i] = max(leftMax[i - 1], height[i]);
        }
        
        rightMax[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; --i) {
            rightMax[i] = max(rightMax[i + 1], height[i]);
        }
        
        int waterTrapped = 0;
        for (int i = 0; i < n; ++i) {
            waterTrapped += min(leftMax[i], rightMax[i]) - height[i];
        }
        
        return waterTrapped;
    }
};

int main() {
    int n;
    cin >> n;
    vector<int> height(n);
    for (int i = 0; i < n; ++i) {
        cin >> height[i];
    }
    
    Solution sol;
    int result = sol.trap(height);
    
    cout << result << endl;
    
    return 0;
}
`,
    // 91: Python
    `class Solution:
    def trap(self, height):
        n = len(height)
        if n == 0:
            return 0
        
        leftMax = [0] * n
        rightMax = [0] * n
        
        leftMax[0] = height[0]
        for i in range(1, n):
            leftMax[i] = max(leftMax[i - 1], height[i])
        
        rightMax[n - 1] = height[n - 1]
        for i in range(n - 2, -1, -1):
            rightMax[i] = max(rightMax[i + 1], height[i])
        
        waterTrapped = 0
        for i in range(n):
            waterTrapped += min(leftMax[i], rightMax[i]) - height[i]
        
        return waterTrapped

if __name__ == "__main__":
    n = int(input().strip())
    height = list(map(int, input().strip().split()))
    
    sol = Solution()
    result = sol.trap(height)
    
    print(result)

`,
    // 92: Java
    `public class Solution9Java {
    // Solution for userparam = 9 in Java
    public static void main(String[] args) {
        System.out.println("Calling solution 9 in Java");
    }
}`,
    // 93: JavaScript
    `function solution9JavaScript() {
    // Solution for userparam = 9 in JavaScript
    console.log("Calling solution 9 in JavaScript");
}

solution9JavaScript();
`,
  ],
];

const Editorial = () => {
  const { id } = useParams();
  let index = id;
  if (id === undefined) index = "0";
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption.value);
  };

  const languageOptions = [
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
  ];

  const renderSolution = () => {
    let solutionCode =
      solutions[index][
        languageOptions.findIndex((option) => option.value === selectedLanguage)
      ];

    return (
      <SyntaxHighlighter language={selectedLanguage} style={docco}>
        {solutionCode}
      </SyntaxHighlighter>
    );
  };

  return (
    <>
      <Navbar />
      <div className="editorial-container">
        <h2>Editorial Page</h2>
        <CopyToClipboard
          text={
            solutions[index][
              languageOptions.findIndex(
                (option) => option.value === selectedLanguage
              )
            ]
          }
          onCopy={() =>
            alert(
              `Copied ${selectedLanguage} code successfully to the clipboard!`
            )
          }
        >
          <button className="copy-button">Copy Solution</button>
        </CopyToClipboard>

        <div className="language-selector">
          <Select
            value={languageOptions.find(
              (option) => option.value === selectedLanguage
            )}
            options={languageOptions}
            onChange={handleLanguageChange}
          />
        </div>
        <h3>
          {selectedLanguage} Solution for the question number = {index}
        </h3>
        {renderSolution()}
      </div>
      <Footer />
    </>
  );
};

export default Editorial;
