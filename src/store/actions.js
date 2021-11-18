import {getAdaptedMovieDetail, getAdaptedMoviesList} from "../services/adapter";
import {fetchMovieDetail, fetchMoviesList, fetchSimilarFilms} from "../services/api";

export const ActionTypes = {
  SetGenre: `SET_GENRE`,
  SetMovies: `SET_MOVIES`,
  SetCurrentMovie: `SET_CURRENT_MOVIE`,
  SetSimilarMovies: `SET_SIMILAR_MOVIES`,
  SetError: `SET_ERROR`,
  SetCurrentMovieId: `SET_CURRENT_MOVIE_ID`,
};


export const getGenreAction = (genre) => {
  return {
    type: ActionTypes.SetGenre,
    payload: genre,
  };
};

export const getMoviesAction = (movies) => {
  return {
    type: ActionTypes.SetMovies,
    payload: movies,
  };
};

export const getCurrentMovieAction = (movie) => {
  return {
    type: ActionTypes.SetCurrentMovie,
    payload: movie,
  };
};

export const getSimilarMoviesAction = (movie) => {
  return {
    type: ActionTypes.SetSimilarMovies,
    payload: movie,
  };
};

export const getErrorAction = (error) => {
  return {
    type: ActionTypes.SetError,
    payload: error,
  };
};

export const getCurrentMovieIdAction = (movieId) => {
  return {
    type: ActionTypes.SetCurrentMovieId,
    payload: movieId,
  };
};

// async actions

export const loadDetailsMovieAction = (id) => {
  return async (dispatch) => {
    const data = await fetchMovieDetail(id);

    if (data.movie) {
      const adaptedMovie = getAdaptedMovieDetail(data.movie);

      dispatch(getCurrentMovieAction(adaptedMovie));
    } else {
      dispatch(getErrorAction(data.error));
    }
  };
};

export const loadMoviesAction = () => {
  return async (dispatch) => {
    const data = await fetchMoviesList();

    if (data.movies) {
      const adaptedMovies = getAdaptedMoviesList(data.movies);

      dispatch(getMoviesAction(adaptedMovies));
    } else {
      dispatch(getErrorAction(data.error));
    }
  };
};

export const loadSimilarMoviesAction = (id) => {
  return async (dispatch) => {
    const data = await fetchSimilarFilms(id);

    if (data.movies) {
      const adaptedMovies = getAdaptedMoviesList(data.movies);

      dispatch(getSimilarMoviesAction(adaptedMovies));
    } else {
      dispatch(getErrorAction(data.error));
    }
  };
};
