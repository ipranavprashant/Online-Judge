import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { logout, selectUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [problemId, setProblemId] = useState(null);
  const [date, setDate] = useState("");

  // Function to generate a random problem ID
  const generateRandomId = () => {
    return Math.floor(Math.random() * 9); // Adjust as per your requirement
  };

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect to set date and check for stored problem ID
  useEffect(() => {
    const storedDate = localStorage.getItem("problemOfDayDate");
    const storedProblemId = localStorage.getItem("problemOfDayId");

    // Check if stored date matches current date
    if (storedDate === new Date().toISOString().slice(0, 10)) {
      setProblemId(parseInt(storedProblemId));
    } else {
      const newId = generateRandomId();
      setProblemId(newId);
      localStorage.setItem("problemOfDayId", newId);
      localStorage.setItem(
        "problemOfDayDate",
        new Date().toISOString().slice(0, 10)
      );
    }

    setDate(new Date().toISOString().slice(0, 10)); // Format date as YYYY-MM-DD
  }, []);

  const id = Math.floor(Math.random() * 10); // Returns a random integer from 0 to 9:

  const handleLogout = () => {
    // localStorage.removeItem("authToken");
    dispatch(logout());
    navigate("/login").then(() => {
      window.location.reload(); // reload the page after navigating to login
      // alert("Successfully logged out");
    });
  };
  console.log(user);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Coding Engine
        </Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/contests" className="nav-link" onClick={toggleMenu}>
              Contests
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/problem-of-the-day/${date}/${problemId}`}
              className="nav-link"
              onClick={toggleMenu}
            >
              Problem of the day
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/problems" className="nav-link" onClick={toggleMenu}>
              Problems
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/code-editor" className="nav-link" onClick={toggleMenu}>
              Compiler
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/problem-of-the-day/${date}/${id}`}
              className="nav-link"
              onClick={toggleMenu}
            >
              Random Problem
            </Link>
          </li>
          <li className="nav-item">
            {user && (
              <>
                <Link to="/login" className="nav-link">
                  Logout
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" onClick={handleLogout} className="nav-link">
                  Sign In
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
