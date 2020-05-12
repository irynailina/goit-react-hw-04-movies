import React from "react";
import { Link } from "react-router-dom";
import styles from "./moviesList.module.css";
import PropTypes from "prop-types";

const MoviesList = ({ popularMovies, from }) => (
  <>
    <h2 className={styles.title}>Trending today</h2>
    <ul>
      {popularMovies.map((movie) => (
        <li className={styles.moviesItem} key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from },
            }}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default MoviesList;

MoviesList.propTypes = {
  popularMovies: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      from: PropTypes.string.isRequired,
    }),
  }),
};
