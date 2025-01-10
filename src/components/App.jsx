import { useState } from "react";
import "../styles/App.css";
import Card from "./Card.jsx";

// score + reset button area
// card area

let defaultCardsArr = [
  { name: "France", countryCode: "FR", id: 0 },
  { name: "Japan", countryCode: "JP", id: 1 },
  { name: "Germany", countryCode: "DE", id: 2 },
  { name: "Russia", countryCode: "RU", id: 3 },
  { name: "Mexico", countryCode: "MX", id: 4 },
  { name: "United States", countryCode: "US", id: 5 },
  { name: "India", countryCode: "IN", id: 6},
  { name: "Brazil", countryCode: "BR", id: 7},
  { name: "China", countryCode: "CN", id: 8},
  { name: "Indonesia", countryCode: "ID", id: 9},
  { name: "Pakistan", countryCode: "PK", id: 10}, 
  { name: "Bangladesh", countryCode: "BD", id: 11}
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
