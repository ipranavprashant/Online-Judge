import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import "../Styles/Editor.css";
import "../Styles/OnlyEditor.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import config from "./config";

const OnlyEditor = () => {
  const COMPILER_URL = config.COMPILER_URL;

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
  const [output, setOutput] = useState("--no stdouts--");

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
  };

  const resetCode = () => {
    setCode(defaultCode[selectedLanguage]);
  };

  useEffect(() => {
    localStorage.setItem("savedCode", code);
  }, [code]);

  const handleRun = async () => {
    const payload = {
      language: selectedLanguage,
      code: code,
      input: "NIL", // Assuming default input is "NIL"
    };
    try {
      const { data } = await axios.post(`${COMPILER_URL}/run`, payload);

      console.log(data);
      setOutput(data.output);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Editor-Compiler">
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
            {/* <button className="submit-btn">Submit</button> */}
          </div>
        </div>
      </div>
      <div className="output-container-compiler">
        <p className="output-title-compiler">Stdout:</p>
        <div>{output}</div>
      </div>
      <Footer />
    </>
  );
};

export default OnlyEditor;
