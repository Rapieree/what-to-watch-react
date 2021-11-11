import {getCurrentMovieAction, getMoviesAction, getSimilarMoviesAction} from "../store/actions";
import {getAdaptedMovieDetail, getAdaptedMoviesList} from "./adapter";

// const movieDetailUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=1&with_images=true&with_cast=true`;

export const fetchMovieDetail = async (dispatch, movieId) => {
  try {
    let response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`);

    if (response.ok) {
      let json = await response.json();

      let movieDetail = json.data.movie;

      let adaptedMovieDetail = getAdaptedMovieDetail(movieDetail);

      dispatch(getCurrentMovieAction(adaptedMovieDetail));
    } else {
      // eslint-disable-next-line
      console.log(`Error ${response.ok}, url: ${response.url}`)
    }
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};

export const fetchMoviesList = async (dispatch, genre = ``, count = 40, page = 1) => {
  try {
    let response = await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=${count}&page=${page}`);

    if (response.ok) {
      let json = await response.json();

      let moviesList = json.data.movies;

      const adaptedMovies = getAdaptedMoviesList(moviesList);

      dispatch(getMoviesAction(adaptedMovies));
      dispatch(getCurrentMovieAction(adaptedMovies[0]));
    } else {
      // eslint-disable-next-line
      console.log(`Error ${response.ok}, url: ${response.url}`)
    }
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};

export const fetchSimilarFilms = async (dispatch, movieId) => {
  try {
    let response = await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`);

    if (response.ok) {
      let json = await response.json();

      let similarMovies = json.data.movies;

      const adaptedSimilarMovies = getAdaptedMoviesList(similarMovies);

      dispatch(getSimilarMoviesAction(adaptedSimilarMovies));
    } else {
      // eslint-disable-next-line
      console.log(`Error ${response.ok}, url: ${response.url}`)
    }
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};
