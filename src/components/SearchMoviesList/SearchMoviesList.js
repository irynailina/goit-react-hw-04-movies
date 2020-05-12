import React from 'react';
import {Link} from 'react-router-dom'

const SearchMoviesList = ({movies, query, path, from}) => (
    <>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link  to={{
            pathname: `${path}/${movie.id}`,
            state: {from, search: query }

          }}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  </>

);

export default SearchMoviesList;