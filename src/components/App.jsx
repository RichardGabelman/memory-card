import { useState } from 'react';
import '../styles/App.css';
import Card from "./Card.jsx";

// score + reset button area
// card area

let cardsArr = [
  {name: "France", imageInfo: "./france.jpg", id: 0},
  {name: "French Flag", imageInfo: "./frenchFlag.jpg", id: 1},
  {name: "Germany", imageInfo: "./germany.jpg", id: 2}
]

// pairs[idx] is the id of the matching card
// const pairs = [1, 0]

function App() {
  const [revealedArr, setRevealedArr] = useState([0, 1]);
  const [completedArr, setCompletedArr] = useState([]);

  const handleCardClick = (id) => {
    console.log(id + " clicked");
    if (revealedArr.length >= 2) {
      setRevealedArr([id])
    } else {
      if (revealedArr[0] != id) {
        setRevealedArr([revealedArr[0], id])
      }
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
