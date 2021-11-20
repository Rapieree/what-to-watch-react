// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadMoviesAction} from '../../store/actions';
import {FILMS_ADDED_ON_CLICK} from '../../utils/const';
import MoviesList from '../MoviesList/MoviesList';

const LoadMoviesListWrapper = () => {
  const activeGenre = useSelector((state) => state.activeGenre);
  const moviesByGenre = useSelector((state) => state.movies[activeGenre]);
  const remainingMoviesCounts = useSelector((state) => state.remainingMoviesCounts[activeGenre]);
  const currentViewMovies = useSelector((state) => state.currentViewMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    if (remainingMoviesCounts <= FILMS_ADDED_ON_CLICK) {
      dispatch(loadMoviesAction(activeGenre));
    }
  }, [remainingMoviesCounts]);

  return <MoviesList movies={moviesByGenre} currentViewMovies={currentViewMovies} />;
};

export default LoadMoviesListWrapper;
