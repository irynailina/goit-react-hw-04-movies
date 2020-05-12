import React from "react";
import styles from "./movieDetails.module.css";
import PropTypes from 'prop-types';

const MovieDetails = ({
  title,
  overview,
  poster,
  year,
  score,
  genres,
  handleGoBack,
}) => (
  <>
    <button className={styles.button} onClick={handleGoBack}>
      {" "}
      Go back
    </button>
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}>
        <img alt="poster" src={poster} width="250" height="350"></img>
      </div>
      <div className={styles.infoWrap}>
        <h2>
          {title}
          <span> ({year})</span>
        </h2>
        <p>User score: {score}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
    <p className={styles.additionalInfo}>Additional information</p>
  </>
);

export default MovieDetails;

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  handleGoBack: PropTypes.func.isRequired
}