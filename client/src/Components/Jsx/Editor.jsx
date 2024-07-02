import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";
import "../Styles/Editor.css";
import TestCaseForm from "./TestCaseForm";

const Editor = () => {
  const defaultCode = {
    cpp: `
// Boilerplate code for C++
  #include <iostream>
  using namespace std;
  int main() { 
      cout << "Hey, Pranav Prashant!";       
      return 0; 
  }`,

    java: `
  // Boilerplate code for Java
  public class Main {
      public static void main(String[] args) {
          System.out.println("Hey, Pranav Prashant!");
      }
  }`,
    python: `
  # Boilerplate code for Python
  print("Hey, Pranav Prashant!")`,
    javascript: `
  // Boilerplate code for JavaScript
  console.log("Hey, Pranav Prashant!");`,
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

  const handleRun = async () => {
    const payload = {
      language: selectedLanguage,
      code: code,
      input: input,
    };
    try {
      // const { data } = await axios.post("http://localhost:8080/run", payload);
      const { data } = await axios.post(
        "http://15.206.166.120:8080/run",
        payload
      );
      console.log(data);
      setOutput(data.output);
    } catch (error) {
      console.log(error);
    }
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
            <button className="submit-btn" onClick={handleRun}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="output-container">
        <p className="output-title">Stdout:</p>
        <div>{output}</div>
        {output === expectedOutput ? (
          <p>Congrats, the Output Matches with the expected output!</p>
        ) : input !== "NIL" ? (
          <p>Sorry, the Output doesn't match with the expected output</p>
        ) : (
          <p></p>
        )}
      </div>
      <h2>Add Custom Testcases:</h2>
      <TestCaseForm addTestCase={addTestCase} />
    </>
  );
};

export default Editor;
