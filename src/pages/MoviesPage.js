import React, { Component } from "react";
import { fetchMovies } from "../services/Api";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchMoviesList from "../components/SearchMoviesList/SearchMoviesList";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    page: 1,
    error: null,
  };

  componentDidMount() {
    const str = queryString.parse(this.props.location.search).query;
    this.props.location.search &&
      this.setState({
        query: str,
      });
    this.props.location.search &&
      fetchMovies(str, 1)
        .then(({ data }) =>
          this.setState((prevState) => ({
            movies: [...data.results],
            page: prevState.page + 1,
          }))
        )
        .catch((error) => this.setState({ error }));
  }

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
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
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
        <SearchMoviesList
          from={this.props.location.pathname}
          query={query}
          movies={movies}
          path={this.props.match.path}
        />
      </>
    );
  }
}

export default withRouter(MoviesPage);
