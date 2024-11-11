import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Styles from './Home.module.css';

const Home = () => {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleStartGame = () => {
    // Programmatically navigate and pass state
    navigate('/Game', { state: { playerName } });
  };

  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.quizApp}>
            <h2>Quiz App</h2>
          </div>
          <div className={Styles.Start}>
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={handleNameChange}
            />
            <button onClick={handleStartGame}>Start</button>
          </div>
          <div className={Styles.HighScore}>
           <Link  to="/HighScore"> High Score</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
