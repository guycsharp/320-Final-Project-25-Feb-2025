import React, { useState, useEffect } from 'react';
import { fetchFilmDetails } from '../services/swapiService';

const FilmList = ({ films }) => {
  const [filmDetails, setFilmDetails] = useState([]);

  useEffect(() => {
    const getFilmDetails = async () => {
      const details = await Promise.all(films.map(url => fetchFilmDetails(url)));
      setFilmDetails(details);
    };

    getFilmDetails();
  }, [films]);

  return (
    <ul>
      {filmDetails.map(film => (
        <li key={film.title}>
          <h3>{film.title}</h3>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.release_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
