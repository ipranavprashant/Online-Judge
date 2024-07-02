import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/Jsx/NotFound";
import "./App.css";
import ProblemList from "./Components/Jsx/ProblemList";
import OnlyEditor from "./Components/Jsx/OnlyEditor";
import FetchSingleProblem from "./Components/Jsx/FetchSingleProblem";
// import { useSelector } from "react-redux";
// import { selectUser } from "./utils/userSlice";

const App = () => {
  // const user = useSelector(selectUser);

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
        <Route path="/*" element={<NotFound />} />
        {/* 
          Place additional routes here if needed.
          Remember to put wildcard route ("/*") at the end.
        */}
      </Routes>
    </>
  );
};

export default App;
