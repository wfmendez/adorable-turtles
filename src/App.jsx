import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [turtles, setTurtles] = useState([]);
  const [filteredTurtles, setFilteredTurtles] = useState([]);

  useEffect(() => {
    fetch('https://adorable-turtles-api.onrender.com/turtles')
      .then((response) => response.json())
      .then((data) => {
        setTurtles(data)
        setFilteredTurtles(data)
      });
  }, []);

const OnSearchChange = (event) => {
          const searchString = event.target.value.toLowerCase();
          const newFilteredTurtles = turtles.filter((turtles) => turtles.name.toLowerCase().includes(searchString)
          );
          setFilteredTurtles(newFilteredTurtles);
        }

  return (
    <div className='app-container'>
      <h1 className='app-title'>Adorable Turtles</h1>
      <SearchBox onChangeHandler={OnSearchChange}/>
      <CardList turtles={filteredTurtles} />
    </div>
  );
};

export default App
