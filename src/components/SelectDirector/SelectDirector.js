import React from 'react';

export default function SelectDirector({ directors, setDirector }) {
  return (
    <select onChange={(e) => setDirector(e.target.value)}>
      <option value="All">All</option>
      {directors.map((director) => (
        <option key={director.id} value={director.id}>
          {director.name}
        </option>
      ))}
    </select>
  );
}
