import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../services/swapiService';
import Pagination from './Pagination';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(page);
      setCharacters(data.results);
    };

    getCharacters();
  }, [page]);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.name}>
            <Link to={`/character/${character.url.match(/\/([0-9]*)\/$/)[1]}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
