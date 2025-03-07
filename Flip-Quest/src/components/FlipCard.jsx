import { useState } from "react";
import "../styles/FlipCard.css";
import React from "react";
import NextBtn from "./NextBtn";
import Header from "./Header";
// import { getRandomQuestion } from "../data/questions";

const FlipCard = ({ numqsns, cuurIndex, question, onNext, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Mapping categories to background colors
  const categoryColors = {
    Programming: "programming-bg",
    Geography: "geography-bg",
    Mathematics: "math-bg",
    Entertainment: "entertainment-bg",
  };

  // Get the corresponding CSS class for the selected category
  const selectedBgClass = categoryColors[category] || "default-bg"; // Fallback color

  console.log(selectedBgClass);
  console.log(category);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false); // Reset flip before moving to the next question
    onNext();
  };

  return (
    // Quiz questions display container
    <div className="quiz-container">
      <div className="quiz-header">
        <Header />
      </div>
      <div className="quiz-content" onClick={handleFlip}>
        <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
          <div className={`flip-card-front ${selectedBgClass}`}>
            {question.image && (
              <img
                src={question.image}
                alt="Question"
                className="question-image"
              />
            )}
            <h1 className="question-text">{question.question}</h1>
          </div>
          <div className={`flip-card-back ${selectedBgClass}`}>
            <h1 className="answer-text">
              Correct Answer: {question.options[question.correctAnswer]}
            </h1>
          </div>
        </div>
      </div>
      <div className="next-btn">
        <div>
          <h1 className="status">
            {cuurIndex} out of {numqsns}
          </h1>
        </div>
        <div>
          <NextBtn onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
