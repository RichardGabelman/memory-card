import { useState } from 'react';
import '../styles/App.css';
import Card from "./Card.jsx";

// score + reset button area
// card area

function App() {
  const [cardsArr, setCardsArr] = useState([{name:"name", imageInfo:"./test.jpg"}]);
  return (
    <>
      <Card data={cardsArr[0]} revealed={true}/>
    </>
  );
}

export default App
