import React from 'react';
import {Link} from 'react-router-dom'

const SearchMoviesList = ({movies, query, path}) => (
    <>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link  to={{
            pathname: `${path}/${movie.id}`,
            search: `?query=${query}`,
            // hash: "#to-watch",
            // state: {from: popularMovies}

          }}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  </>

);

export default SearchMoviesList;