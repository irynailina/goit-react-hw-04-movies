import React, { Component, lazy, Suspense } from "react";
import * as moviesAPI from "./services/Api";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const AsyncHome = lazy(() => import("./pages/HomePage" /* home-page */));
const AsyncMoviesPage = lazy(() => import("./pages/MoviesPage" /* movies-page */));
const AsyncMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage" /* movie-details-page */));
const AsyncErrorPage = lazy(() => import("./pages/ErrorPage" /* error-page */));

class App extends Component {
  state = {
    error: null,
    casts: [],
    reviews: [],
  };

  getMovieCast = (id) => {
    moviesAPI.fetchMovieCast(id).then(({ data }) =>
      this.setState({
        casts: [...data.cast],
      })
    );
  };

  getMovieReviews = (id) => {
    moviesAPI.fetchMovieReviews(id, 1).then(({ data }) =>
      this.setState({
        reviews: [...data.results],
      })
    );
  };

  handleQueryChange = (e) => {
    e.persist();
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path="/" component={AsyncHome}></Route>
            <Route exact path="/movies" component={AsyncMoviesPage} />
            <Route path="/movies/:id" component={AsyncMovieDetailsPage} />
            <Route component={AsyncErrorPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
