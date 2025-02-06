import React, { useState } from 'react';
import './QuizApp.scss';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setIsQuizCompleted(true);
  };

  if (isQuizCompleted) {
    return (
      <div className="quiz-result">
        <h2>Quiz Completed</h2>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-app">
      <h2>Quiz App</h2>
      <div className="question">
        <p>{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedAnswer === option ? "selected" : ""}`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="controls">
        {currentQuestion < questions.length - 1 ? (
          <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Next Question
          </button>
        ) : (
          <button onClick={handleFinishQuiz} disabled={!selectedAnswer}>
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
