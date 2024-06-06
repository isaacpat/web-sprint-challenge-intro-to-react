import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])//this is my code
  
  // ❗ Create effects to fetch the data and put it in state
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleResponse,planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);
        const peopleData = peopleResponse.data;
        const planetsData = planetsResponse.data;

        const combinedData = peopleData.map(person => {
          const homeworld = planetsData.find(planet => planet.id === person.homeworld);
          return { ...person, homeworld: homeworld ? homeworld.name : 'unknown' };
        });

        setCharacters(combinedData);
      }catch(error){
        console.log('Error fetching data', error);
        
      }
    }
    fetchData();

  }, [])//this is my code
    

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
     {characters.map(character => (
       <Character key={character.id} character={character} />
     ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
