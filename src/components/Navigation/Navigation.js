import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css'

const Navigation = () => (
    <ul className={styles.navList}>
    <li className={styles.navItem}>
      <NavLink className={styles.link} exact
      activeStyle={{
          color: "red"
      }}
      to="/">Home</NavLink>
    </li>
    <li>
      <NavLink className={styles.link}
       activeStyle={{
        color: "red"
    }}
      to="/movies">Movies</NavLink>
    </li>
  </ul>
);

export default Navigation;