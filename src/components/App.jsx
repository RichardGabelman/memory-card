import { useState } from 'react';
import '../styles/App.css';
import Card from "./Card.jsx";

// score + reset button area
// card area

let cardsArr = [
  {name: "France", imageInfo: "./france.jpg", id: 0},
  {name: "French Flag", imageInfo: "./frenchFlag.jpg", id: 1}
]

// pairs[idx] is the id of the matching card
// const pairs = [1, 0]

function App() {
  const [revealedArr, setRevealedArr] = useState([true]);
  const [completedArr, setCompletedArr] = useState([false, false]);

  return (
    <>
      <div className="cardHolder">
        {cardsArr.map((card) => (
          <Card data={card} key={card.id} revealed={revealedArr[card.id]} completed={completedArr[card.id]}/>
        ))}
      </div>
    </>
  );
}

export default App
