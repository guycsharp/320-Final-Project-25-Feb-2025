import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails } from '../services/swapiService';
import FilmList from './FilmList';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      const data = await fetchCharacterDetails(id);
      setCharacter(data);
    };

    getCharacterDetails();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <h2>Films</h2>
      <FilmList films={character.films} />
    </div>
  );
};

export default CharacterDetails;
