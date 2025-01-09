import { useState } from 'react'

// score + reset button area
// card area

function Card({ data, revealed }) {

  const name = data.name;
  const imageInfo = data.imageInfo;

  if (revealed) {
    return (
      <div className="card">
        <h1>{name}</h1>
        <h3>{imageInfo}</h3>
      </div>
    );
  }

  return (
    <>
      <h1>Face Down</h1>
    </>
  );
}

export default Card