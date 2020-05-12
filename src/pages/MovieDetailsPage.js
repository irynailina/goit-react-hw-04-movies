import React, { Component, lazy, Suspense } from "react";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import { fetchMovieDescription } from "../services/Api";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import PropTypes from "prop-types";

const AsyncCast = lazy(() => import("../components/Cast/Cast"));
const AsyncReviews = lazy(() => import("../components/Reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    casts: [],
    from: "",
    search: "",
  };

  componentDidMount() {
    this.getMovieDetails();
    this.props.location.state &&
      this.setState({
        from: this.props.location.state.from,
        search: this.props.location.state.search,
      });
  }

  getMovieDetails = () => {
    fetchMovieDescription(this.props.match.params.id).then((movie) =>
      this.setState({
        movie: movie,
      })
    );
  };

  handleGoBack = () => {
    this.state.search
      ? this.props.history.push({
          pathname: this.state.from,
          search: `query=${this.state.search}`,
        })
      : this.props.history.push("/");
  };

  render() {
    const { movie } = this.state;
    return (
      <>
        {movie && (
          <>
            <MovieDetails
              handleGoBack={this.handleGoBack}
              id={movie.data.id}
              title={movie.data.title}
              overview={movie.data.overview}
              poster={`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`}
              year={movie.data.release_date.slice(0, 4)}
              score={movie.data.vote_average}
              genres={movie.data.genres.map((genre) => genre.name + " ")}
            />
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `/movies/${this.props.match.params.id}/cast`,
                  }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `/movies/${this.props.match.params.id}/reviews`,
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Switch>
                <Route path="/movies/:id/cast" component={AsyncCast} />
                <Route path="/movies/:id/reviews" component={AsyncReviews} />
              </Switch>
            </Suspense>
          </>
        )}
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.object.isRequired,
  }),
  state: PropTypes.shape({
    from: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};
