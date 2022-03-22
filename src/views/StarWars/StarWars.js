import React from 'react';

import { useState, useEffect } from 'react';
import { getMovies } from '../../services/fetch';

export default function StarWars() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getMovies();
      setMovies(movies);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Star Wars Movies</h1>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}
