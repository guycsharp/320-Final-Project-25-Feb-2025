import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CharDesc from './CharDesc';
import CharacterMenu from './CharacterMenu'; // Import CharacterMenu

import '../css/RoutesCharacterSelection.css'

const str1 = 'https://swapi.dev/api/people/';

function RoutesCharacterSelection() {
  const navigate = useNavigate(); // Declare navigate
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(str1);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        console.log(result.results);
        setData(result.results); // Correctly set the data to the results array
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // this use effect is called only once when component loads

  const Home = () => {
    return <h1>Home Page!!</h1>;
  };

  const About = () => {
    return <h1>About</h1>;
  };

  const handleClick = () => {
    navigate('/about'); // Properly call navigate
  };

  if (loading) {
        return <div>Loading...</div>;
  }

  if (error) {
        return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <CharacterMenu characters={data} /> {/* Add CharacterMenu */}
      <Routes>
        <Route path="/" element={<CharDesc character={{'name':'default'}}/>}/>
        {/* <Route path="/about" element={<About />} /> */}
        {data.map((character, index) => {
          const characterId = character.url.replace(str1, '').replace('/', '');
          return (
            <Route key={index} path={`/${characterId}`} element={<CharDesc character={character} />} />
          );
        })}
      </Routes>
    </>
  );
}

export default RoutesCharacterSelection;
