import React from "react";
import {Link} from 'react-router-dom'
import styles from './moviesList.module.css'


const MoviesList = ({ popularMovies }) => (
  <>
    <h2 className={styles.title}>Trending today</h2>
    <ul>
      {popularMovies.map((movie) => (
        <li className={styles.moviesItem} key={movie.id}>
          <Link to={{
            pathname: `/movies/${movie.id}`,
          }}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default MoviesList;
