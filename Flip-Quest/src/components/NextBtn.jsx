import React from "react";
import "../styles/NextBtn.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NextBtn = ({ onClick }) => {
  return (
    <div className="quiz-footer">
      <div className="question-status"></div>
      <button className="next-qsn-btn" onClick={onClick}>
        <span>Next</span>{" "}
        <ArrowForwardIcon style={{ color: "black", fontSize: "24px" }} />
      </button>
    </div>
  );
};

export default NextBtn;
