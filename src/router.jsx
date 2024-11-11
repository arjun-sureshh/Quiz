import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Game from "./Game";
import HighScore from "./Components/HighScore/HighScore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Guiz_game", // It’s common to use lowercase with hyphens for URL paths
    element: <Quiz />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
  {
    path:'/HighScore',
    element:<HighScore/>
  }
]);
