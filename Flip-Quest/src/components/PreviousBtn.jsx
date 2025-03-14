// PreviousBtn.js
import React from "react";
import "../styles/PreviousBtn.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import ArrowBackIcon for the previous arrow

const PreviousBtn = ({ onClick }) => {
  return (
    <div className="quiz-footer">
      <div className="question-status"></div>
      <button className="prev-qsn-btn" onClick={onClick}>
        <ArrowBackIcon style={{ color: "black", fontSize: "24px" }} />
      </button>
    </div>
  );
};

export default PreviousBtn;
