import {ALL_GENRES} from "../utils/const";
import {ActionTypes} from "./actions";

const defaultState = {
  movies: [],
  activeGenre: ALL_GENRES,
  currentMovie: {
    id: ``,
    title: ``,
    year: ``,
    genres: ``,
    backgroundSrc: ``,
    posterSrc: ``,
    imageSrc: ``,
  },
  similarMovies: [],
  isAuthUser: false,
  error: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SetGenre:
      return {...state, activeGenre: action.payload};
    case ActionTypes.SetMovies:
      return {...state, movies: action.payload};
    case ActionTypes.SetCurrentMovie:
      return {...state, currentMovie: action.payload};
    case ActionTypes.SetSimilarMovies:
      return {...state, similarMovies: action.payload};
    case ActionTypes.SetError:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export {reducer};
