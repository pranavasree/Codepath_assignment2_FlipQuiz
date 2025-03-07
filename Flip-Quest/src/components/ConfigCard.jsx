import React from "react";
import "../styles/ConfigCard.css";
import { useState } from "react";

const ConfigCard = ({ startQuiz, setSelectedCategory, setNumQuestions }) => {
  const [category, setCategory] = useState("Programming");
  const [localNumQuestions, setLocalNumQuestions] = useState(5); // Renamed to avoid conflict

  const handleStartQuiz = () => {
    console.log("Selected Category:", category);
    console.log("Number of Questions:", localNumQuestions);
    setSelectedCategory(category);
    setNumQuestions(localNumQuestions);
    startQuiz(category, localNumQuestions);
  };

  return (
    // Quiz configuration container
    <div className="config-container">
      <h2 className="config-title">Flip Quest Configuration</h2>
      {/* which type of category */}
      <div className="config-options">
        <h4 className="option-title">Select category</h4>
        <div className="category-options">
          {["Programming", "Geography", "Mathematics", "Entertainment"].map(
            (cat) => (
              <button
                key={cat}
                className={`category-option ${
                  category === cat ? "active" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>
      {/* No. of questions */}
      <div className="config-options">
        <h4 className="option-title">No. of Questions</h4>
        <div className="question-options">
          {[5, 10, 15, 20, 25].map((num) => (
            <button
              key={num}
              className={`question-option ${
                localNumQuestions === num ? "active" : ""
              }`}
              onClick={() => setLocalNumQuestions(num)} // Set number of questions when clicked
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <button className="start-quiz-btn" onClick={handleStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default ConfigCard;
