export const ActionTypes = {
  SetGenre: `SET_GENRE`,
  SetMovies: `SET_MOVIES`,
  SetCurrentMovie: `SET_CURRENT_MOVIE`,
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

