import React from 'react'

const SearchMoviesList = ({movies}) => (
    <>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <a href="#">{movie.original_title}</a>
        </li>
      ))}
    </ul>
  </>

);

export default SearchMoviesList;