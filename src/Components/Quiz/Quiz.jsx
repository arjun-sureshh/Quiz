import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Styles from './Quiz.module.css'
import { CircularProgress } from '@mui/material'
// import { Score } from '@mui/icons-material'

const Quiz = ({setScore, setQuestionCount, setQuizEnded }) => {

  const [videogame, setVideogame] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Answer, setAnswer] = useState(null)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  

  const handleRandom = () => {
    return Math.floor(Math.random() * 4); // generate 0,1,2,3 randum numbers
  };




  const fetchQuestions = () => {

    try {
      axios.get("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple").then((result) => {
        // console.log(result.data.results);
        let Quizdatas = result.data.results;


        Quizdatas.map((quizitems) => {
          let answerArray = quizitems.incorrect_answers
          let Allanswers = [];
          let randomnumber = handleRandom();
          for (let i = 0, j = 0; i < answerArray.length + 1; i++) {

            if (i == randomnumber) {
              Allanswers[i] = quizitems.correct_answer;
            } else {

              Allanswers[i] = answerArray[j];
              j++;
            }

          }
          quizitems.Allanswers = Allanswers;
          quizitems.correct_answer_key = randomnumber;

        });
        console.log(Quizdatas)
        setVideogame(Quizdatas)

      })
    }
    catch (error) {
      console.error('Error occurend in fetching data from api', error);

    }
  }

  useEffect(() => {
    fetchQuestions();
  }, [])

// ..................checking answere...................

const checkAnswer = (answerIndex, answer) => {
  // Mark the answer as selected
  setSelectedAnswerIndex(answerIndex);

  // Check if the answer is correct
  const isCorrect = answerIndex === videogame[currentQuestionIndex]?.correct_answer_key;
  
  // Set the answer state (correct/incorrect) and update score if correct
  setAnswer(isCorrect ? 'correct' : 'incorrect');
  setScore((prevScore) => (isCorrect ? prevScore + 10 : prevScore));

  // Mark that the answer has been given
  setHasAnswered(true);
console.log('Selected ans inde:',selectedAnswerIndex)

  // Handle next question logic after a delay
  setTimeout(() => {
    if (currentQuestionIndex < videogame.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionCount((prevCount) => prevCount + 1);
      
      // Reset answer and hasAnswered for next question
      setAnswer(null);
      setHasAnswered(false);
      setSelectedAnswerIndex(null); // Reset selected answer index for the new question
    } else {
      setQuizEnded(true); // End the quiz if all questions are answered
    }
  }, 400); // Delay to allow users to see their answer
};

// ......................................
  return (
    <div className={Styles.body}>
      {
        videogame.length > 0 ?
          <div className={Styles.container}>
            <div className={Styles.Question}>
              {videogame[currentQuestionIndex].question}
            </div>
            <div className={Styles.answer_container}>
              {videogame[currentQuestionIndex].Allanswers.map((answer, answerIndex) => (
              <div
              className={`${Styles.answer} 
                ${selectedAnswerIndex === answerIndex 
                  ? (Answer === 'correct' ? Styles.correctAns : Answer === 'incorrect' ? Styles.incorrectAns : '') 
                  : ''}
                ${hasAnswered && videogame[currentQuestionIndex].correct_answer_key === answerIndex ? Styles.correctAns : ''}`}
              onClick={() => checkAnswer(answerIndex)}
              key={answerIndex}
            >
              <span className={Styles.answerIndex}>{answerIndex + 1}</span>
              {answer}
            </div>
            
            
              
              ))}
            </div>
            {/* You can add a Next button if needed */}
            {/* <button onClick={Nextpage}>Next Question</button> */}
          </div>
        :
        <div><CircularProgress /></div>
      }
    </div>
  
  )
}

export default Quiz