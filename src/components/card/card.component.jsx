import './card.styles.css'

const Card = ({ name, description, imgURL }) => {
  return (
      <div className="card-container">
          <img src={imgURL}></img>
          <h1>{name}</h1>
          <p>{description}</p>
    </div>
  );
};

export default Card;