import { useState } from "react";
import "../styles/App.css";
import Card from "./Card.jsx";

// score + reset button area
// card area

let defaultCardsArr = [
  { name: "France", imageInfo: "./france.jpg", id: 0 },
  { name: "Japan", imageInfo: "./japan.jpg", id: 1 },
  { name: "Germany", imageInfo: "./germany.jpg", id: 2 },
  { name: "Russia", imageInfo: "./russia.jpg", id: 3 },
  { name: "Mexico", imageInfo: "./mexico.jpg", id: 4 },
  { name: "United States", imageInfo: "./unitedstates.jpg", id: 5 },
  { name: "India", imageInfo: "./india.jpg", id: 6},
  { name: "Brazil", imageInfo: "./brazil.jpg", id: 7},
  { name: "China", imageInfo: "./china.jpg", id: 8},
  { name: "Indonesia", imageInfo: "./indonesia.jpg", id: 9},
  { name: "Pakistan", imageInfo: "./pakistan.jpg", id: 10}, 
  { name: "Bangladesh", imageInfo: "./bangladesh.jpg", id: 11}
];

const arrShuffle = (arr) => {
  let array = [...arr];
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [cardsArr, setCardsArr] = useState(arrShuffle(defaultCardsArr));
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedArr, setClickedArr] = useState([]);

  const handleCardClick = (id) => {
    console.log(id + " clicked");

    // failure
    if (clickedArr.includes(id)) {
      handleFailure();
    } else {
      handleSuccess(id);
    }

    setCardsArr(arrShuffle(cardsArr));
  };

  const handleSuccess = (id) => {
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 > highScore) {
      setHighScore(currentScore + 1);
    }
    setClickedArr([...clickedArr, id]);
  };

  const handleFailure = () => {
    setCurrentScore(0);
    setClickedArr([]);
  };

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
          <Card data={card} key={card.id} onClick={handleCardClick} />
        ))}
      </div>
    </>
  );
}

export default App;
