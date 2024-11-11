import React from 'react'
import Styles from './HeadDisplay.module.css'
import ProgressMobileStepper from '../ProgressBar/ProgressBar'

const HeadDisplay = ({score,questionCount,playerName}) => {
  console.log(playerName);
  
  return (
    <div className={Styles.headDisplayWrapper}>
    <div className={Styles.questionBar}>
      <h2>Question {questionCount}/10</h2>
      <ProgressMobileStepper questionCount={questionCount} />
    </div>
    <div className={Styles.playerName}>{playerName}</div>
    <div className={Styles.Score}>{score}</div>
  </div>
  )   
}

export default HeadDisplay
