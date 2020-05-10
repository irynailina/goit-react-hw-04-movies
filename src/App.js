import React, { Component } from "react";
import * as moviesAPI from "./services/Api";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage";

class App extends Component {
  state = {
    error: null,
    casts: [],
    reviews: [],
  };

  //  getMoveDescription = (id) => {
  //    moviesAPI.fetchMovieDescription(id).then(data).catch(error => this.setState({error}))
  //  }

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
      <Navigation/>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage}/>
          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}

export default App;
