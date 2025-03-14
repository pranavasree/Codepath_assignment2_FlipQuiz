import { useState } from "react";
import "./styles/App.css";
import ConfigCard from "./components/ConfigCard";
import FlipCard from "./components/FlipCard";
import ResultCard from "./components/ResultCard";
import { getRandomQuestion } from "./data/questions";

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Programming");
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  // ✅ Streak Tracking
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const startQuiz = (selectedCategory, numQuestions) => {
    const questions = getRandomQuestion(selectedCategory, numQuestions);
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setCurrentStreak(0); // Reset streaks
    setLongestStreak(0);
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

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleShuffleQuestions = () => {
    const shuffledQuestions = [...quizQuestions].sort(
      () => Math.random() - 0.5
    );
    setQuizQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setCorrectCount(0); // ✅ Reset correct answer count
    setCurrentStreak(0); // ✅ Reset current streak
  };

  const handleTryAgain = () => {
    setShowQuiz(false);
    setShowResult(false);
    setSelectedCategory("Programming");
    setNumQuestions(5);
    setQuizQuestions([]);
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setCurrentStreak(0);
    setLongestStreak(0);
  };

  return (
    <div className="main-container">
      {!showQuiz && !showResult && (
        <ConfigCard
          startQuiz={startQuiz}
          setSelectedCategory={setSelectedCategory}
          setNumQuestions={setNumQuestions}
        />
      )}

      {showQuiz && (
        <FlipCard
          numqsns={quizQuestions.length}
          cuurIndex={currentQuestionIndex + 1}
          question={quizQuestions[currentQuestionIndex]}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          onShuffle={handleShuffleQuestions}
          category={selectedCategory}
          setCorrectCount={setCorrectCount}
          currentStreak={currentStreak}
          longestStreak={longestStreak}
          setCurrentStreak={setCurrentStreak}
          setLongestStreak={setLongestStreak}
        />
      )}

      {showResult && (
        <ResultCard
          correctCount={correctCount}
          totalQuestions={numQuestions}
          onTryAgain={handleTryAgain}
        />
      )}
    </div>
  );
};

export default App;
