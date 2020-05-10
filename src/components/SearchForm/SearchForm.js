import React from 'react'

const SearchForm = ({handleSubmit, handleQueryChange, query}) => (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Enter the movie"
        onChange={handleQueryChange}
        value={query}
        ></input>
        <button type="submit">Search</button>
    </form>
);

export default SearchForm;