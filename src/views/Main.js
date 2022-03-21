import React from 'react';

import { useState, useEffect } from 'react';
import { getMovies } from '../services/fetch';

export default function Main() {
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
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}
