import React, { useState } from "react";
import "../styles/FlipCard.css";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";
import ShuffleBtn from "./ShuffleBtn";
import Header from "./Header";

const FlipCard = ({
  numqsns,
  cuurIndex,
  question,
  onNext,
  onPrevious,
  onShuffle,
  category,
  setCorrectCount,
  currentStreak,
  longestStreak,
  setCurrentStreak,
  setLongestStreak,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isScoreUpdated, setIsScoreUpdated] = useState(false);

  const categoryColors = {
    Programming: "programming-bg",
    Geography: "geography-bg",
    Mathematics: "math-bg",
    Entertainment: "entertainment-bg",
  };

  const selectedBgClass = categoryColors[category] || "default-bg";

  const handleFlip = () => {
    if (isAnswered) {
      setIsFlipped(!isFlipped);
    } else {
      alert("You must submit an answer before flipping the card!");
    }
  };

  const handleNext = () => {
    if (!isAnswered) return;
    setIsFlipped(false);
    setUserAnswer("");
    setIsCorrect(null);
    setIsAnswered(false);
    setIsScoreUpdated(false); // Reset score update flag
    onNext();
  };

  const handlePrevious = () => {
    if (cuurIndex > 1) {
      setIsFlipped(false);
      setUserAnswer("");
      setIsCorrect(null);
      setIsAnswered(false);
      setIsScoreUpdated(false); // Reset score update flag
      onPrevious();
    }
  };

  const handleSubmit = () => {
    if (userAnswer.trim() === "") {
      alert("Please enter an answer before submitting!");
      return;
    }

    const isAnswerCorrect =
      userAnswer.trim().toLowerCase() ===
      question.options[question.correctAnswer].toLowerCase();

    setIsCorrect(isAnswerCorrect);
    setIsAnswered(true);

    if (isAnswerCorrect && !isScoreUpdated) {
      setCorrectCount((prevCount) => prevCount + 1); // Increase score only if not already updated
      setIsScoreUpdated(true); // Mark score as updated

      setCurrentStreak((prevStreak) => {
        const newStreak = prevStreak + 1;
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
        return newStreak;
      });
    } else {
      setCurrentStreak(0);
    }
  };

  const handleShuffle = () => {
    onShuffle();
    setCorrectCount(0);
    setCurrentStreak(0);
    setLongestStreak(0);
    setUserAnswer("");
    setIsCorrect(null);
    setIsAnswered(false);
    setIsFlipped(false);
    setIsScoreUpdated(false);
  };

  return (
    <div className="quiz-container">
      <div className="streak-info">
        <h3 className="current-streak">🔥Current Streak: {currentStreak}</h3>
        <h3 className="longest-streak">🏆Longest Streak: {longestStreak}</h3>
      </div>
      <div className="quiz-header">
        <Header />
      </div>
      <div className="quiz-content">
        <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
          <div
            className={`flip-card-front ${selectedBgClass}`}
            onClick={handleFlip}
          >
            {question.image && (
              <img
                src={question.image}
                alt="Question"
                className="question-image"
              />
            )}
            <h1 className="question-text">{question.question}</h1>
          </div>
          <div
            className={`flip-card-back ${selectedBgClass}`}
            onClick={handleFlip}
          >
            <h1 className="answer-text">
              Correct Answer: {question.options[question.correctAnswer]}
            </h1>
          </div>
        </div>
      </div>

      <div className="answer-input">
        <input
          type="text"
          placeholder="Enter your answer..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="answer-box"
        />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
      {isCorrect !== null && (
        <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? "Correct! 🎉" : "Wrong answer! ❌"}
        </div>
      )}

      <div className="navigation-btns">
        <ShuffleBtn onClick={handleShuffle} />
        <h1 className="status">
          {cuurIndex}/{numqsns}
        </h1>
        <PreviousBtn onClick={handlePrevious} disabled={cuurIndex === 1} />
        <NextBtn onClick={handleNext} disabled={!isAnswered} />
      </div>
    </div>
  );
};

export default FlipCard;
