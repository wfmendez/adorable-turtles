import { useState, useEffect } from 'react'

import './App.css';

const Card = ({ name, description, imgURL }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={imgURL} alt={name}></img>
    </div>
  );
};

const App = () => {
  const [turtles, setTurtles] = useState([]);
  console.log(turtles);

  useEffect(() => {
    fetch('https://adorable-turtles-api.onrender.com/turtles')
      .then((response) => response.json())
      .then((data) => setTurtles(data))
      .catch((error) => console.error("Error fetching turtles:", error));
  }, []);

  return (
    <>
      {turtles.map(({ name, turtleId, description, image_url }) => { // Asegúrate de desestructurar turtleId para la key
        return <Card key={turtleId} name={name} description={description} imgURL={image_url}> </Card>; // Usar turtleId como key es más robusto
      })}
    </>
  );
};

export default App
