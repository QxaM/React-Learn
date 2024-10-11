import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";

import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";
import { useCallback } from "react";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionId = userAnswers.length;
  const isCompleted = activeQuestionId >= QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isCompleted) {
    return (
      <div id="summary">
        <img src={QuizComplete} alt="Trophy" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionId].answers].sort(
    (a, b) => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionId}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionId].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
