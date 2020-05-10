import React from "react";
import {Link} from 'react-router-dom'


const MoviesList = ({ popularMovies }) => (
  <>
    <ul>
      {popularMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={{
            pathname: `/movies/${movie.id}`,
            search: "?query:apple",
            hash: "#to-watch",
            state: {from: popularMovies}
          }}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default MoviesList;
