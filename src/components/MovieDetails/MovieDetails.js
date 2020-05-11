import React from "react";
import styles from "./movieDetails.module.css";

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
