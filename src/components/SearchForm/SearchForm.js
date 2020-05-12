import React from "react";
import styles from "./searchForm.module.css";

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
