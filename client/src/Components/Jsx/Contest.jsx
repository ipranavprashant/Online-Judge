import React, { useEffect, useState } from "react";
import "../Styles/Contest.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contest = () => {
  const [contests, setContests] = useState({
    current: [],
    previous: [],
    upcoming: [],
  });

  useEffect(() => {
    // Fetch contest data from API
    const fetchData = async () => {
      // Replace with actual API call
      const response = await fetch("/api/contests");
      const data = await response.json();
      setContests(data);
    };

    fetchData();
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const Timer = ({ endTime }) => {
    const [timeLeft, setTimeLeft] = useState(endTime - new Date().getTime());

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(endTime - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [endTime]);

    return <span className="timer">{formatTime(timeLeft)}</span>;
  };

  return (
    <>
      <Navbar />
      <div className="contest-page">
        <h1 className="to-center">
          <u>Coming Soon...</u>
        </h1>
        <h2>Current Contest</h2>
        {contests.current.length > 0 ? (
          <div className="contest-grid">
            {contests.current.map((contest, index) => (
              <div key={index} className="contest-item current">
                <h3>{contest.name}</h3>
                <p>{contest.description}</p>
                <p>
                  Ends in:{" "}
                  <Timer endTime={new Date(contest.endTime).getTime()} />
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="to-center">No current contests</p>
        )}

        <h2>Previous Contests</h2>
        {contests.previous.length > 0 ? (
          <div className="contest-grid">
            {contests.previous.map((contest, index) => (
              <div key={index} className="contest-item previous">
                <h3>{contest.name}</h3>
                <p>{contest.description}</p>
                <p>{new Date(contest.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="to-center">No previous contests</p>
        )}

        <h2>Upcoming Contests</h2>
        {contests.upcoming.length > 0 ? (
          <div className="contest-grid">
            {contests.upcoming.map((contest, index) => (
              <div key={index} className="contest-item upcoming">
                <h3>{contest.name}</h3>
                <p>{contest.description}</p>
                <p>
                  Starts in:{" "}
                  <Timer endTime={new Date(contest.startTime).getTime()} />
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="to-center">No upcoming contests</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contest;
