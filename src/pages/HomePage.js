import React, { Component } from "react";
import { fetchPopularMovies } from "../services/Api";
import MoviesList from "../components/MoviesList/MoviesList";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

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
        <MoviesList
          popularMovies={popularMovies}
          path={this.props.match.path}
        />
      </>
    );
  }
}

export default withRouter(HomePage);

HomePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
