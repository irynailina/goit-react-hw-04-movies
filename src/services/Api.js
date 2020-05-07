import axios from "axios";

// const mainURL = `http://api.themoviedb.org/3/search/movie?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&query=${query}&page=${page}&per_page=20&include_adult=false`;
const baseURL = "http://api.themoviedb.org/3/search/movie?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&query=";
const pageUnit = "&page="
const last = "&per_page=20&include_adult=false"
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=fbcc5b88360cd16683538596837c22ac&language=en-US&page=1"





export const fetchMovies = (query, page) => axios.get(baseURL + query + pageUnit + page + last);
export const fetchPopularMovies = () => axios.get(popularURL)