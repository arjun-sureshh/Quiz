import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styles from './FinalScore.module.css'

const FinalScore = ({ score, playerName }) => {

  // Function to save the high score to localStorage
  const saveHighScore = (playerName, score) => {
    const newScore = { name: playerName, score: score };
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10); // Keep only top 10 scores 
    localStorage.setItem("highScores", JSON.stringify(highScores));
  };

  useEffect(() => {
    // Call the saveHighScore function when the component mounts
    saveHighScore(playerName, score);
  }, [playerName, score]); // Dependencies to ensure it runs only once on mount with current values

  return (
    <div className={Styles.finalScoreContainer}>
      <div className={Styles.finalScoreWrapper}>
        <h2>Quiz Complete!</h2>
        <p>Name: <strong>{playerName}</strong></p>
        <p>Your Final Score: <strong>{score}</strong></p>
        <Link to="/" className={`${Styles.btn}`}>Go Home</Link>
        <Link
          to={{
            pathname: '/HighScore',
            state: { score, playerName },
          }}
          className={`${Styles.btn}`} style={{ marginTop: '10px' }}
        >
          View High Scores
        </Link>
      </div>
    </div>
  );
};

export default FinalScore;
