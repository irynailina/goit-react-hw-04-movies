import React from "react";
import styles from "./searchForm.module.css";
import PropTypes from 'prop-types';

const SearchForm = ({ handleSubmit, handleQueryChange, query }) => (
  <form onSubmit={handleSubmit}>
    <input
      className={styles.input}
      type="text"
      placeholder="Enter the movie"
      onChange={handleQueryChange}
      value={query}
    ></input>
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

