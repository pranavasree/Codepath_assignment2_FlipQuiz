import React from "react";
import { useState } from "react";
import "./styles/App.css";
import ConfigCard from "./components/ConfigCard";
import FlipCard from "./components/FlipCard";
import ResultCard from "./components/ResultCard";
import { getRandomQuestion } from "./data/questions"; // Import random question generator

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Programming"); // default category
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = (selectedCategory, numQuestions) => {
    const questions = getRandomQuestion(selectedCategory, numQuestions);
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setShowQuiz(true);
    setShowResult(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowQuiz(false);
      setShowResult(true);
    }
  };

  // Reset state when "Try Again" button is clicked
  const handleTryAgain = () => {
    setShowQuiz(false);
    setShowResult(false);
    setSelectedCategory("Programming"); // Reset to default category
    setNumQuestions(5); // Reset to default number of questions
    setQuizQuestions([]);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="main-container">
      <div className="quiz-config">
        {!showQuiz && !showResult && (
          <ConfigCard
            startQuiz={startQuiz}
            setSelectedCategory={setSelectedCategory}
            setNumQuestions={setNumQuestions}
          />
        )}
      </div>

      <div className="quiz-qsns">
        {showQuiz && (
          <FlipCard
            numqsns={quizQuestions.length}
            cuurIndex={currentQuestionIndex + 1}
            question={quizQuestions[currentQuestionIndex]}
            onNext={handleNextQuestion}
            category={selectedCategory}
          />
        )}
      </div>

      <div>{showResult && <ResultCard onTryAgain={handleTryAgain} />}</div>
    </div>
  );
};

export default App;
