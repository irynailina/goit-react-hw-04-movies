import React, { Component } from "react";
import { fetchMovies } from "../services/Api";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchMoviesList from "../components/SearchMoviesList/SearchMoviesList";
import { withRouter} from "react-router-dom";
// import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    page: 1,
    error: null,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query !== this.state.query)
  //   this.getMovies()
  // }

  // componentDidMount() {
  //   const str = queryString.parse(this.props.location.search);
  //   console.log(str);
  // }

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
    // this.setState({
    //   query: "",
    // });
  };

  render() {
    // console.log(queryString.parse(this.props.location.search));
    const { query, movies } = this.state;
    return (
      <>

        <SearchForm
          handleSubmit={this.handleSubmit}
          handleQueryChange={this.handleQueryChange}
          query={query}
        />
        {/* <Route path="/movies?query=apple" render={props => <SearchMoviesList {...props} query={query} movies={movies} path={this.props.match.path}/>} /> */}
        <SearchMoviesList
          query={query}
          movies={movies}
          path={this.props.match.path}
        />
      </>
    );
  }
}

export default withRouter(MoviesPage);
