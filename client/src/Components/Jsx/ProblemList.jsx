import React from "react";
import "../Styles/ProblemList.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ProblemList = () => {
  return (
    <>
      <Navbar />
      <div className="container-problem-list">
        <div className="title">
          <h1>Our Curated Problem List</h1>
        </div>
        <div className="problem-list">
          <ul className="stylel">
            <li className="easy">
              <Link
                to="/problems/0"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Two Sum
              </Link>
            </li>
            <li className="medium">
              <Link
                to="/problems/1"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Most Profit Assigning Work
              </Link>
            </li>
            <li className="hard">
              <Link
                to="/problems/2"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Median Of Two Sorted Arrays
              </Link>
            </li>

            <li className="easy">
              <Link
                to="/problems/3"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Valid Parenthesis
              </Link>
            </li>
            <li className="medium">
              <Link
                to="/problems/4"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Valid Sudoku
              </Link>
            </li>
            <li className="hard">
              <Link
                to="/problems/5"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Combination Sum
              </Link>
            </li>

            <li className="easy">
              <Link
                to="/problems/6"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Jump Game II
              </Link>
            </li>
            <li className="medium">
              <Link
                to="/problems/7"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Multiply Strings
              </Link>
            </li>
            <li className="hard">
              <Link
                to="/problems/8"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Rotate Image
              </Link>
            </li>

            <li className="hard">
              <Link
                to="/problems/9"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Trapping Rain Water
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProblemList;
