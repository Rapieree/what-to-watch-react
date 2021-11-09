export const ActionTypes = {
  SetGenre: `SET_GENRE`,
  SetMovies: `SET_MOVIES`
};

class Action {
  static setGenre(genre) {
    return {
      type: ActionTypes.SetGenre,
      payload: genre,
    };
  }

  static setMovies(films) {
    return {
      type: ActionTypes.SetMovies,
      payload: films,
    };
  }
}

export {Action};
