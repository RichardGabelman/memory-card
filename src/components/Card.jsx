// score + reset button area
// card area

function Card({ data, revealed, completed }) {

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
    <>
      <h1>Face Down</h1>
    </>
  );
}

export default Card