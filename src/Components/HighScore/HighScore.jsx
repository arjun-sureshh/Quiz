import React, { useEffect, useState } from 'react';
import Styles from './HighScore.module.css'
import { Link } from 'react-router-dom';

const HighScore = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from localStorage when component mounts
    const scores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(scores);
  }, []);

  return (
    <div className={Styles.highScoresContainer}>
    <div className={Styles.highScoresWrapper}>
      <div className={Styles.labels}>
        <h2>High Scores</h2>
        <Link to="/">Go Home</Link>
      </div>
      <div className={Styles.highScoresList}>
        {highScores.length > 0 ? (
          highScores.map((score, index) => (
            <div key={index} className={Styles.highScoreItem}>
              <div>{score.name}</div>
              <div>
                <span>Score:</span> {score.score}
              </div>
            </div>
          ))
        ) : (
          <p className={Styles.noScoresMessage}>No high scores available</p>
        )}
      </div>
    </div>
  </div>

  );
};

export default HighScore;
