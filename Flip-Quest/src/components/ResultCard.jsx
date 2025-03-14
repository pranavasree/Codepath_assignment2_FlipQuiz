import React from "react";
import QuizCover from "../assets/quiz-over.png";
import "../styles/ResultCard.css";

const ResultCard = ({ correctCount, totalQuestions, onTryAgain }) => {
  return (
    <div className="result-container">
      <img src={QuizCover} className="result-img" alt="Quiz Completed" />
      <h2 className="result-title">Quiz Completed!</h2>
      <p className="result-message">
        You scored <b>{correctCount}</b> out of <b>{totalQuestions}</b>!
      </p>
      <button className="try-again-btn" onClick={onTryAgain}>
        Try Again
      </button>
    </div>
  );
};

export default ResultCard;
