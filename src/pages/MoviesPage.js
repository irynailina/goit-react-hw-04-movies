import React, { Component } from "react";
import { fetchMovies } from "../services/Api";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchMoviesList from "../components/SearchMoviesList/SearchMoviesList";
// import MovieDetailsPage from "./MovieDetailsPage";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    page: 1,
    error: null,
  };

  getMovies = () => {
    fetchMovies(this.state.query, 1)
      .then(({ data }) =>
        this.setState((prevState) => ({
          movies: [...data.results],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }));
  };

  handleQueryChange = (e) => {
    e.persist();
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
    this.setState({
      query: "",
    });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <>
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleQueryChange={this.handleQueryChange}
          query={query}
        />
        <SearchMoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
