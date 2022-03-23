import React from 'react';

import { useState, useEffect } from 'react';
import { getDonutShops } from '../../services/fetch';

export default function Doughnuts() {
  const [donutShops, setDonutShops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDonutShops();
      setDonutShops(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Doughnut Shops</h1>
      {donutShops.map((shop) => (
        <p key={shop.id}>{shop.name}</p>
      ))}
    </div>
  );
}
