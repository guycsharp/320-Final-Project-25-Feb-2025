const API_URL = 'https://swapi.dev/api/';

export const fetchCharacters = async (page = 1) => {
  const response = await fetch(`${API_URL}people/?page=${page}`);
  const data = await response.json();
  return data;
};

export const fetchCharacterDetails = async (id) => {
  const response = await fetch(`${API_URL}people/${id}/`);
  const data = await response.json();
  return data;
};

export const fetchFilmDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
