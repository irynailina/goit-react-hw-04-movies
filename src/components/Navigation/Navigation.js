import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
    <ul>
    <li>
      <NavLink exact
      activeStyle={{
          color: "red"
      }}
      to="/">Home</NavLink>
    </li>
    <li>
      <NavLink
       activeStyle={{
        color: "red"
    }}
      to="/movies">Movies</NavLink>
    </li>
  </ul>
);

export default Navigation;