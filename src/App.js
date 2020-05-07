import React, { Component } from 'react'
import * as moviesAPI from './services/Api'

class App extends Component {
  state = { 
    popularMovies: [],
    movies: [],
    query: "love",
    page: 1,
    error: null
   }

   componentDidMount() {
     this.getPopularMovies()
   }
   
   getPopularMovies = () => {
     moviesAPI.fetchPopularMovies().then(({data}) => this.setState({
       popularMovies: [...data.results]
     })).catch(error => this.setState(error))
   }

   getMovies = () => {
     moviesAPI.fetchMovies(this.state.query, 1).then(({data}) => this.setState((prevState) => ({
       movies: [...data.results],
       page: prevState.page + 1
     }))).catch(error => this.setState({error}))
   }

   handleQueryChange = (e) => {
     e.persist();
     this.setState({
       query: e.target.value
     })
   }

  render() {
    const {movies, popularMovies} =  this.state
    return (
       <>
    <ul>
      {popularMovies.map(movie => <li key={movie.id}>{movie.original_title}</li>)}
    </ul>
    </>
    )
   
  }
}

export default App;