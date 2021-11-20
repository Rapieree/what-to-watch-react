import {getAdaptedMovieDetail, getAdaptedMoviesList} from "../services/adapter";
import {fetchMovieDetail, fetchMoviesList, fetchSimilarFilms} from "../services/api";

export const ActionTypes = {
  SetGenre: `SET_GENRE`,
  SetMovies: `SET_MOVIES`,
  SetCurrentMovie: `SET_CURRENT_MOVIE`,
  SetSimilarMovies: `SET_SIMILAR_MOVIES`,
  SetCurrentViewMovies: `SET_CURRENT_VIEW_MOVIES`,
  SetError: `SET_ERROR`,
  SetCurrentMovieId: `SET_CURRENT_MOVIE_ID`,
  SetMoviesCounterByGenres: `SET_MOVIES_COUNTER_BY_GENRES`,

  // hard actions
  AddMovies: `ADD_MOVIES`, // фильмы на вход
  IncRequestMoviesPages: `INC_REQUEST_MOVIES_PAGES`,
  SetRemainingMoviesCounts: `SET_REMAINING_MOVIES_COUNTS`,
};


export const setGenreAction = (genre) => {
  return {
    type: ActionTypes.SetGenre,
    payload: genre,
  };
};

export const setMoviesAction = (movies) => {
  return {
    type: ActionTypes.SetMovies,
    payload: movies,
  };
};

export const setCurrentMovieAction = (movie) => {
  return {
    type: ActionTypes.SetCurrentMovie,
    payload: movie,
  };
};

export const setSimilarMoviesAction = (movie) => {
  return {
    type: ActionTypes.SetSimilarMovies,
    payload: movie,
  };
};

export const setErrorAction = (error) => {
  return {
    type: ActionTypes.SetError,
    payload: error,
  };
};

export const setCurrentMovieIdAction = (movieId) => {
  return {
    type: ActionTypes.SetCurrentMovieId,
    payload: movieId,
  };
};

export const setRemainingMoviesCountsAction = (genre, count) => {
  return {
    type: ActionTypes.SetRemainingMoviesCounts,
    payload: {genre, count},
  };
};

export const incRequestMoviesPagesAction = (genre) => {
  return {
    type: ActionTypes.IncRequestMoviesPages,
    payload: {genre},
  };
};

export const addMoviesAction = (genre, movies) => {
  return {
    type: ActionTypes.AddMovies,
    payload: {genre, movies},
  };
};

export const setCurrentViewMovies = (count) => {
  return {
    type: ActionTypes.SetCurrentViewMovies,
    payload: count,
  };
};

// async actions

export const loadDetailsMovieAction = (id) => {
  return async (dispatch) => {
    const data = await fetchMovieDetail(id);

    if (data.movie) {
      const adaptedMovie = getAdaptedMovieDetail(data.movie);

      dispatch(setCurrentMovieAction(adaptedMovie));
    } else {
      dispatch(setErrorAction(data.error));
    }
  };
};

export const loadMoviesAction = (genre) => {
  return async (dispatch, getState) => {
    const page = getState().requestMoviesPages[genre];
    const remainingMoviesCounts = getState().remainingMoviesCounts[genre];

    const data = await fetchMoviesList(genre, page);

    if (data.movies) {
      const adaptedMovies = getAdaptedMoviesList(data.movies);
      const correctMovies = adaptedMovies.filter((movie) => movie.genres);

      dispatch(incRequestMoviesPagesAction(genre));

      dispatch(setRemainingMoviesCountsAction(genre, correctMovies.length + remainingMoviesCounts));

      dispatch(addMoviesAction(genre, adaptedMovies));

    } else {
      dispatch(setErrorAction(data.error));
    }
  };
};

export const loadSimilarMoviesAction = (id) => {
  return async (dispatch) => {
    const data = await fetchSimilarFilms(id);

    if (data.movies) {
      const adaptedMovies = getAdaptedMoviesList(data.movies);

      dispatch(setSimilarMoviesAction(adaptedMovies));
    } else {
      dispatch(setErrorAction(data.error));
    }
  };
};
