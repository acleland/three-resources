import React from 'react';

export default function SelectDirector({ directors }) {
  return (
    <select>
      {directors.map((director) => (
        <option key={director.id} value={director.id}>
          {director.name}
        </option>
      ))}
    </select>
  );
}
