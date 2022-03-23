import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/starwars">Star Wars</NavLink>
        </li>
        <li>
          <NavLink exact to="/fuzzybunnies">
            Fuzzy Bunnies
          </NavLink>
        </li>
        <li>
          <NavLink to="/doughnuts">Doughnuts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
