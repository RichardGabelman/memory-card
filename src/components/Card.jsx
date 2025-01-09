import '../styles/Card.css';
// score + reset button area
// card area

function Card({ data, revealed, completed, onClick }) {

  const name = data.name;
  const imageInfo = data.imageInfo;
  const id = data.id;

  if (revealed || completed) {
    return (
      <div className="card">
        <h1>{name}</h1>
        <h3>{imageInfo}</h3>
        <h3>{id}</h3>
      </div>
    );
  }

  return (
    <div className="card" onClick={() => onClick(id)}>
      <h1>Face Down</h1>
    </div>
  );
}

export default Card