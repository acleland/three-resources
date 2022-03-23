import React from 'react';

import { useState, useEffect } from 'react';
import SelectDirector from '../../components/SelectDirector/SelectDirector';
import { getDirectors, getMovies } from '../../services/fetch';

export default function StarWars() {
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [director, setDirector] = useState('All');

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getMovies();
      setMovies(movies);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getDirectors();
      setDirectors(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Star Wars Movies</h1>
      <SelectDirector {...{ directors, setDirector }} />
      {movies
        .filter((movie) => director === 'All' || director === movie.director_id.toString())
        .map((movie) => (
          <p key={movie.id}>{`${movie.title} (${movie.year}) - ${movie.directors.name}`}</p>
        ))}
    </div>
  );
}
