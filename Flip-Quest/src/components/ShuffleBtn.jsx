// ShuffleBtn.js
import React from "react";
import "../styles/ShuffleBtn.css"; // Import the corresponding CSS

const ShuffleBtn = ({ onClick }) => {
  return (
    <div className="quiz-footer">
      <button className="shuffle-qsn-btn" onClick={onClick}>
        Shuffle
      </button>
    </div>
  );
};

export default ShuffleBtn;
