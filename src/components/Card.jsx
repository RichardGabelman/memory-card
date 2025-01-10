import '../styles/Card.css';
// score + reset button area
// card area

function Card({ data, onClick }) {

  const name = data.name;
  const id = data.id;
  const imgSrc = "https://flagsapi.com/" + data.countryCode + "/shiny/64.png";

  return (
    <div className="card" onClick={() => onClick(id)}>
      <h1>{name}</h1>
      <img src={imgSrc} />
    </div>
  );
}

export default Card