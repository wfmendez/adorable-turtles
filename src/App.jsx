import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component';

import './App.css';

const App = () => {
  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    fetch('https://adorable-turtles-api.onrender.com/turtles')
      .then((response) => response.json())
      .then((data) => setTurtles(data))
      .catch((error) => console.error("Error fetching turtles:", error));
  }, []);

  return (
    <>
      <CardList turtles={turtles} />
    </>
  );
};

export default App
