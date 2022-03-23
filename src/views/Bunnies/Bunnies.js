import React from 'react';

import { useState, useEffect } from 'react';
import { getBunnies } from '../../services/fetch';

export default function Bunnies() {
  const [bunnies, setBunnies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bunnies = await getBunnies();
      setBunnies(bunnies);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fuzzy Bunnies</h1>
      {bunnies.map((bunny) => (
        <p key={bunny.id}>{bunny.name}</p>
      ))}
      <p>
        Learn more about the fuzzy bunnies and their families{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://andrea-fuzzy-bunny.netlify.app/">
          here
        </a>
      </p>
    </div>
  );
}
