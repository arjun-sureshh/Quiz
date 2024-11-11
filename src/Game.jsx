import React, { useEffect, useState } from 'react';
import HeadDisplay from './Components/HeadDisplay/HeadDisplay';
import Quiz from './Components/Quiz/Quiz';
import { useLocation, useNavigate } from 'react-router-dom';
import FinalScore from './Components/FinalScore/Finalscore';
import Styles from './Game.module.css'

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely extract playerName
  const { playerName } = location.state || {};

  // Check if playerName is available, if not, navigate to the home page
  useEffect(() => {
    if (!playerName) {
      navigate('/'); // Redirect to Home if playerName is missing
    }
  }, [playerName, navigate]);

  // Log the playerName to ensure it's passed correctly
  console.log('Player Name in Game Component:', playerName);

  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  return !playerName ? null : quizEnded ? (
    <FinalScore score={score} playerName={playerName} />
  ) : (
    <div className={Styles.gameContainer}>
    <div className={Styles.gameWrapper}>
      <div className={Styles.headDisplayWrapper}>
        <HeadDisplay
          score={score}
          questionCount={questionCount}
          playerName={playerName}
        />
      </div>
      <div className={Styles.quizWrapper}>
        <Quiz
          setScore={setScore}
          setQuestionCount={setQuestionCount}
          setQuizEnded={setQuizEnded}
        />
      </div>
    </div>
  </div>
  );
};

export default Game;
