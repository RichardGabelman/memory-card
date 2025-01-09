import { useState } from 'react';
import '../styles/App.css';
import Card from "./Card.jsx";

// score + reset button area
// card area

let defaultCardsArr = [
  {name: "France", imageInfo: "./france.jpg", id: 0},
  {name: "Japan", imageInfo: "./japan.jpg", id: 1},
  {name: "Germany", imageInfo: "./germany.jpg", id: 2},
  {name: "Russia", imageInfo: "./russia.jpg", id: 3},
  {name: "Mexico", imageInfo: "./mexico.jpg", id: 4},
  {name: "United States", imageInfo: "./unitedstates.jpg", id: 5},
]

function App() {
  const [cardsArr, setCardsArr] = useState(defaultCardsArr);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedArr, setClickedArr] = useState([]);

  const handleCardClick = (id) => {
    console.log(id + " clicked");
  }

  const handleSuccess = (id) => {

  }

  const handleFailure = (id) => {

  }

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div id="scores">
          <h2>Current Score: {currentScore}</h2>
          <h2>High Score: {highScore}</h2>
        </div>
      </header>
      <div className="cardHolder">
        {cardsArr.map((card) => (
          <Card 
            data={card} 
            key={card.id} 
            onClick={handleCardClick}/>
        ))}
      </div>
    </>
  );
}

export default App
