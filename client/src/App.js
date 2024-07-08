import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./Components/Jsx/NotFound";
import "./App.css";
import ProblemList from "./Components/Jsx/ProblemList";
import OnlyEditor from "./Components/Jsx/OnlyEditor";
import FetchSingleProblem from "./Components/Jsx/FetchSingleProblem";
import { useSelector } from "react-redux";
import { selectUser } from "./utils/userSlice";
import Signin from "./Components/Jsx/Signin";
import Signup from "./Components/Jsx/Signup";
import Editorial from "./Components/Jsx/Editorial";
import Contest from "./Components/Jsx/Contest";

const App = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to problems/0 when the path is "/"
    if (window.location.pathname === "/") {
      navigate("/problems/0");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<FetchSingleProblem />} />
        <Route path="/home" element={<FetchSingleProblem />} />
        <Route path="/problems" element={<ProblemList />} />
        <Route path="/code-editor" element={<OnlyEditor />} />
        <Route path="/problems/:id" element={<FetchSingleProblem />} />
        <Route
          path="/problem-of-the-day/:date/:id"
          element={<FetchSingleProblem />}
        />
        <Route path="/contests" element={<Contest />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/editorial/:id" element={<Editorial />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
