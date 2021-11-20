import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentViewMovies, setRemainingMoviesCountsAction} from '../../store/actions';
import {FILMS_ADDED_ON_CLICK, START_FILMS_COUNT} from '../../utils/const';
import MoreButton from '../MoreButton/MoreButton';
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({movies, currentViewMovies = START_FILMS_COUNT}) => {
  const activeGenre = useSelector((state) => state.activeGenre);

  const [viewFilmsCount, setViewFilmsCount] = useState(currentViewMovies);

  const dispatch = useDispatch();

  const addFilmsOnMoreButtonClick = () => {
    if (viewFilmsCount + FILMS_ADDED_ON_CLICK < movies.length) {
      setViewFilmsCount(viewFilmsCount + FILMS_ADDED_ON_CLICK);
      dispatch(setCurrentViewMovies(viewFilmsCount + FILMS_ADDED_ON_CLICK));
    } else {
      setViewFilmsCount(movies.length);
      dispatch(setCurrentViewMovies(movies.length));
    }
    dispatch(setRemainingMoviesCountsAction(activeGenre, movies.length - viewFilmsCount));
  };

  return (
    <>
      <div className="catalog__movies-list">
        {movies.slice(0, viewFilmsCount).map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </div>

      <MoreButton onClick={addFilmsOnMoreButtonClick}/>
    </>
  );
};

export default MoviesList;
