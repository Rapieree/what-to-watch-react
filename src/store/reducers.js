import {ALL_GENRES, genres, START_FILMS_COUNT} from "../utils/const";
import {ActionTypes} from "./actions";

const getInitialMoviesByGenre = (defaultValue) => {
  let outMoviesObject = {
    [ALL_GENRES]: defaultValue,
  };

  genres.forEach((genre) => {
    outMoviesObject[genre] = defaultValue;
  });

  return outMoviesObject;
};

const defaultState = {
  movies: getInitialMoviesByGenre([]),
  requestMoviesPages: getInitialMoviesByGenre(1),
  remainingMoviesCounts: getInitialMoviesByGenre(0),
  activeGenre: ALL_GENRES,
  currentMovieId: null,
  currentMovie: { },
  similarMovies: [],
  isAuthUser: false,
  error: null,
  currentViewMovies: START_FILMS_COUNT,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SetGenre:
      return {...state, activeGenre: action.payload};
    case ActionTypes.SetCurrentMovie:
      return {...state, currentMovie: action.payload};
    case ActionTypes.SetSimilarMovies:
      return {...state, similarMovies: action.payload};
    case ActionTypes.SetError:
      return {...state, error: action.payload};
    case ActionTypes.SetCurrentMovieId:
      return {...state, currentMovieId: action.payload};
    case ActionTypes.AddMovies:
      return {...state, movies: moviesReducer(state.movies, action)};
    case ActionTypes.IncRequestMoviesPages:
      return {...state, requestMoviesPages: moviesReducer(state.requestMoviesPages, action)};
    case ActionTypes.SetRemainingMoviesCounts:
      return {...state, remainingMoviesCounts: moviesReducer(state.remainingMoviesCounts, action)};
    case ActionTypes.SetCurrentViewMovies:
      return {...state, currentViewMovies: Number(action.payload)};
    default:
      return state;
  }
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.AddMovies:
      return {...state, [action.payload.genre]: [...state[action.payload.genre], ...action.payload.movies]};
    case ActionTypes.IncRequestMoviesPages:
      return {...state, [action.payload.genre]: state[action.payload.genre] + 1};
    case ActionTypes.SetRemainingMoviesCounts:
      return {...state, [action.payload.genre]: action.payload.count};
    default:
      return state;
  }
};

export {reducer};
