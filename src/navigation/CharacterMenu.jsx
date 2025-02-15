import React from 'react';
import { Link } from 'react-router-dom';

const str1 = 'https://swapi.dev/api/people/';


const CharacterMenu = ({ characters }) => {
  return (
    <div>
      <h2>Select a Character</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <Link to={`/${character.url}`.replace(str1,'')}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterMenu;
