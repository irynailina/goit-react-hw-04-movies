import axios from "axios";

// const mainURL = `http://api.themoviedb.org/3/search/movie?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&query=${query}&page=${page}&per_page=20&include_adult=false`;
const baseURL = "https://api.themoviedb.org/3/search/movie?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&query=";
const pageUnit = "&page="
const last = "&per_page=20&include_adult=false"
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&page=1"
const mainURL = "https://api.themoviedb.org/3/movie/"
const movieDescriptionLast = "?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US"
const movieCastLast = "/credits?api_key=fbcc5b88360cd16683538596837c22ac"
const movieReviewsLast = "/reviews?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&page="

export const fetchMovies = (query, page) => axios.get(baseURL + query + pageUnit + page + last);
export const fetchPopularMovies = () => axios.get(popularURL);
export const fetchMovieDescription = (id) => axios.get(mainURL + id + movieDescriptionLast);
export const fetchMovieCast = (id) => axios.get(mainURL + id + movieCastLast);
export const fetchMovieReviews = (id, page) => axios.get(mainURL + id + movieReviewsLast + page);