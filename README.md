# Quiz App

A dynamic and interactive quiz application built using React. This app allows users to answer multiple-choice questions, displays their score, and maintains a high-score board. Designed with engaging UI feedback and optimized for a seamless user experience.

## Live Demo
Check out the live demo [here](https://quiz-rho-hazel.vercel.app/).

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

1. **Quiz Flow with Real-time Feedback**  
   Users can answer multiple-choice questions and receive immediate feedback. Correct answers are displayed in green, while incorrect answers show in red. After selecting an answer, the correct answer is highlighted.

2. **Dynamic Scoring System**  
   Points are awarded for correct answers, and the score is updated instantly. A progress bar reflects the current question count and progress.

3. **High-Score Board**  
   User scores are saved to a high-score board. Allows users to view and compare high scores from previous attempts.

4. **End-of-Quiz Summary**  
   Displays the user's final score and name at the end of the quiz. Provides options to view the high-score board or return to the homepage.

## Technologies Used

- **React** for building user interfaces.
- **React Router** for navigation between different app screens.
- **CSS Modules** for modular, scoped styling.

## Project Structure

Here's an overview of the key folders and files in this project:

```plaintext
.
├── src
│   ├── components
│   │   ├── Game.jsx              # Main game component rendering quiz and score
│   │   ├── Quiz.jsx              # Quiz component with questions and answers
│   │   ├── HeadDisplay.jsx       # Displays the progress and current score
│   │   ├── FinalScore.jsx        # Component for displaying final score summary
│   │   ├── HighScore.jsx         # Component displaying high-score board
│   │   └── ProgressBar.jsx # Progress bar component
│   ├── App.js                    # Main app component
│   ├── index.js                  # Main entry file
│   └── styles                    # Folder containing CSS Modules for each component
└── README.md                     # Project README
Installation and Setup
To run this project locally, follow these steps:
 1,Clone the repository:
    git clone https://github.com/your-username/quiz-app.git
2,Navigate to the project directory:
    cd quiz-app
3,Install dependencies:
    npm install
4,Start the development server:
    npm start
5,Access the app: Open http://localhost:3000 in your browser to view the quiz app.

->Components Overview
 .Game Component
    Renders the overall quiz layout, containing the HeadDisplay and Quiz components.

 .Quiz Component
    Manages the display of questions and answers. Highlights selected and correct answers with color-coded feedback. It also updates the score when a correct answer is chosen.

 .HeadDisplay Component
    Displays the score, current question count, and player name, providing context and feedback during the quiz.

 .FinalScore Component
    Summarizes the quiz results, displaying the player's name and final score, and offers options to view high scores or restart the quiz.

 .HighScore Component
    Displays a list of top scores. Each score includes the player's name and total points.

 .Progressbar Component
    Shows a progress bar that represents the current question count in the quiz