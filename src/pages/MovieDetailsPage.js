import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { fetchPopularMovies } from "../services/Api";
import { fetchMovieDescription } from "../services/Api";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    this.getMovieDetails();
    console.log(this.props.match.params.id);
  }

  getMovieDetails = () => {
    fetchMovieDescription(this.props.match.params.id).then((movie) =>
      this.setState({
        movie: movie,
      })
    );
  };

  //   getMovieDetails = () => {
  //     fetchPopularMovies()
  //       .then(( {data} ) =>
  //         this.setState({
  //           movie: data.results.find((movie) => movie.id === this.props.match.params.id)
  //         })
  //       )
  //       .catch((error) => this.setState({ error }));
  //   };

  render() {
    const { movie } = this.state;
    console.log(movie);
    //   console.log(movie.data.title);
    return (
      movie && (
        <>
          <h2>{movie.data.title}</h2>
          <p>{movie.data.overview}</p>
          <button onClick={() => this.props.history.push("/movies")}>
            Go back
          </button>
        </>
      )
    );
  }
}

export default withRouter(MovieDetailsPage);
