import React from 'react';
import Styles from './ProgressBar.module.css';

const ProgressBar = ({ questionCount }) => {
  // Calculate the width based on the question count
  const width = `${questionCount * 49}px`;

  return (
    <div className={Styles.ProgressBar}>
      <div
        className={Styles.loadingBar}
        style={{ width }} // Set the width of loadingBar
      ></div>
    </div>
  );
};

export default ProgressBar;
