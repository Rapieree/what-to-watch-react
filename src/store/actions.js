export const ActionTypes = {
  SetGenre: `SET_GENRE`,
  SetMovies: `SET_MOVIES`
};


export const getGenreAction = (genre) => {
  return {
    type: ActionTypes.SetGenre,
    payload: genre,
  };
};

export const getMoviesAction = (films) => {
  return {
    type: ActionTypes.SetMovies,
    payload: films,
  };
};
