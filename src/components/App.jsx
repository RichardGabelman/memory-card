import { useState } from 'react';
import '../styles/App.css';
import Card from "./Card.jsx";

// score + reset button area
// card area

let cardsArr = [
  {name: "France", imageInfo: "./france.jpg", id: 0},
  {name: "French Flag", imageInfo: "./frenchFlag.jpg", id: 1},
  {name: "Germany", imageInfo: "./germany.jpg", id: 2},
  {name: "German Flag", imageInfo: "./germanFlag.jpg", id: 3}
]

// pairs[idx] is the id of the matching card
const pairs = [1, 0, 3, 2]

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [revealedArr, setRevealedArr] = useState([]);
  const [completedArr, setCompletedArr] = useState([]);

  const handleCardClick = (id) => {
    if (revealedArr.length >= 2) {
      setRevealedArr([id])
    } else if (revealedArr.length == 0) {
      setRevealedArr([id]);
    } else {
      if (revealedArr[0] != id) {
        setRevealedArr([revealedArr[0], id])
        handleBothCards(revealedArr[0], id);
      }
    }
  }

  const handleBothCards = (idOne, idTwo) => {
    if (pairs[idOne] == idTwo) {
      setCurrentScore(currentScore + 1);
      setCompletedArr([...completedArr, idOne, idTwo]);
      if ((currentScore + 1) > highScore) {
        setHighScore(currentScore + 1);
      }
    } else {
      setCurrentScore(0);
    }
  }

  return (
    <>
      <div className="cardHolder">
        {cardsArr.map((card) => (
          <Card 
            data={card} 
            key={card.id} 
            revealed={revealedArr.includes(card.id)} 
            completed={completedArr.includes(card.id)}
            onClick={handleCardClick}/>
        ))}
      </div>
    </>
  );
}

export default App
