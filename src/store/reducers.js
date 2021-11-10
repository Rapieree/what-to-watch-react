import {ALL_GENRES} from "../utils/const";
import {ActionTypes} from "./actions";

const defaultState = {
  movies: [],
  activeGenre: ALL_GENRES,
  currentMovie: null,
  isAuthUser: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SetGenre:
      return {...state, activeGenre: action.payload};
    case ActionTypes.SetMovies:
      return {...state, movies: action.payload};
    case ActionTypes.SetCurrentMovie:
      return {...state, currentMovie: action.payload};
    default:
      return state;
  }
};

export {reducer};
