import React from "react";
import {Link} from 'react-router-dom'
import styles from './moviesList.module.css'


const MoviesList = ({ popularMovies, from }) => (
  <>
    <h2 className={styles.title}>Trending today</h2>
    <ul>
      {popularMovies.map((movie) => (
        <li className={styles.moviesItem} key={movie.id} >
          {console.log(from)}
          <Link to={{
            pathname: `/movies/${movie.id}`,
            state: {from}
          }}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default MoviesList;
