import React from "react";
import styles from "./castList.module.css";

const CastList = ({ casts }) => (
  <ul>
    {casts.map((cast) => (
      <li key={cast.cast_id}>
        <img
          alt="castPicture"
          width="80"
          height="120"
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
              : `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz92F0gljtQ84SpJ_gOJq9JFTnIsAwyHrKSsskwwd-ZgqqvoPE&usqp=CAU`
          }
        ></img>
        <p className={styles.name}>{cast.name}</p>
        <p className={styles.character}>Character: {cast.character}</p>
      </li>
    ))}
  </ul>
);

export default CastList;
