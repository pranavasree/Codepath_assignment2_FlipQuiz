import React from "react";
import TimerIcon from "@mui/icons-material/Timer";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-block">
      <h2 className="quiz-title">Flip Quiz Application</h2>
      <div className="quiz-timer">
        <TimerIcon style={{ fontSize: 30, color: "black" }} />
        <span className="time-duration">15s</span>
      </div>
    </div>
  );
};

export default Header;
