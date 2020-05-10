import React, { Component } from "react";
import { fetchPopularMovies } from "../services/Api";
import MoviesList from "../components/MoviesList/MoviesList";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies = () => {
    fetchPopularMovies()
      .then(({ data }) =>
        this.setState({
          popularMovies: [...data.results],
        })
      )
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { popularMovies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <MoviesList popularMovies={popularMovies} />
      </>
    );
  }
}

export default withRouter(HomePage);
