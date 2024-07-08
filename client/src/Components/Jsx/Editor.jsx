import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";
import "../Styles/Editor.css";
import TestCaseForm from "./TestCaseForm";
import config from "./config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const COMPILER_URL = config.COMPILER_URL;
  const navigate = useNavigate();

  const defaultCode = {
    cpp: `
  // Boilerplate code for C++
  #include <iostream>
  using namespace std;
  int main() { 
      cout << "Hey, Pranav Prashant! pheww cpp is like that old grape vine, older the better ";       
      return 0; 
  }`,

    java: `
  // Boilerplate code for Java
  public class Main {
      public static void main(String[] args) {
          System.out.println("Hey, Pranav Prashant! I know Java is industry relevant :(");
      }
  }`,
    python: `print("Hey, Pranav Prashant! ever heard of slow yet powerful?")`,

    javascript: `
  // Boilerplate code for JavaScript
  console.log("Hey, Pranav Prashant! Ahaa! feels nice to be back home");`,
    ruby: `
  # Boilerplatecode for Ruby
  puts "Hey, Pranav Prashant!"
  `,
  };

  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const [code, setCode] = useState(
    localStorage.getItem("savedCode") || defaultCode[selectedLanguage]
  );

  const editorOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  const languageOptions = [
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ];

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setCode(defaultCode[e.target.value]);
    // setCode(localStorage.getItem("savedCode") || defaultCode[e.target.value]);
  };

  const resetCode = () => {
    setCode(defaultCode[selectedLanguage]);
    localStorage.removeItem("savedCode");
  };

  useEffect(() => {
    localStorage.setItem("savedCode", code);
  }, [code]);

  const [output, setOutput] = useState("--no stdouts--");
  const [input, setInput] = useState("NIL");
  const [verdict, setVerdict] = useState("--submit to see the verdict--");
  const [timeComplexity, setTimeComplexity] = useState("");

  const { id } = useParams();
  const handleRun = async () => {
    const payload = {
      language: selectedLanguage,
      code: code,
      input: input,
      problemId: parseInt(id, 10) + 1,
    };
    try {
      const { data } = await axios.post(`${COMPILER_URL}/run`, payload);
      console.log(data);
      setOutput(data.output);
      setVerdict("--submit to see the verdict--");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    console.log(id);
    const payload = {
      language: selectedLanguage,
      code: code,
      input: input,
      problemId: parseInt(id, 10) + 1,
    };
    try {
      const { data } = await axios.post(`${COMPILER_URL}/run`, payload);
      console.log(data);
      setOutput(data.output);
      setVerdict(data.verdict);
      setTimeComplexity(data.timeComplexity);
      console.log(verdict);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditorial = () => {
    navigate(`/editorial/${id}`);
  };

  const [expectedOutput, setExpectedOutput] = useState("");
  const addTestCase = (input, output) => {
    setInput(input);
    setExpectedOutput(output);
  };

  return (
    <>
      <div className="Editor">
        <div className="header">
          <div className="language-select">
            <label htmlFor="language-select">Select Language:</label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button className="editorial-btn" onClick={handleEditorial}>
            Editorial
          </button>
          <button className="reset-btn" onClick={resetCode}>
            Reset
          </button>
        </div>
        <div>
          <MonacoEditor
            className="monaco-editor"
            language={selectedLanguage}
            theme="vs-dark"
            value={code}
            options={editorOptions}
            onChange={(value) => {
              setCode(value);
              console.log(value);
            }}
            editorDidMount={(editor) => {
              console.log("editorDidMount", editor);
            }}
          />
          <div className="buttons">
            <button className="run-btn" onClick={handleRun}>
              Run
            </button>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="output-container">
        <p className="output-title">Stdout:</p>
        {output === "--no stdouts--" ? (
          <p>"--no stdouts--"</p>
        ) : (
          <div>{output}</div>
        )}
        <br />
        <p className="output-title">Verdict:</p>
        {verdict === "Error in verifying test cases" ? (
          <>
            {verdict}
            <p>please email at ipranavprashant@gmail.com to report</p>
          </>
        ) : (
          <p>{verdict}</p>
        )}
        {timeComplexity}
        {/* {output === expectedOutput ? (
          <>
            <p className="output-title">Verdict:</p>
            <p>{verdict}</p>
            <p>Congrats, the Output Matches with the expected output!</p>
          </>
        ) : input !== "NIL" ? (
          <>
            <p className="output-title">Verdict:</p>
            <p>Sorry, the Output doesn't match with the expected output</p>
          </>
        ) : (
          <p></p>
        )} */}
      </div>
      <h2>Check Against Custom Testcases:</h2>
      <TestCaseForm addTestCase={addTestCase} />
    </>
  );
};

export default Editor;
