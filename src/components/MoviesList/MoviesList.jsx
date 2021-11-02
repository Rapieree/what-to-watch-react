import React, { useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MovieItem from '../MovieItem/MovieItem';

const START_FILMS_COUNT = 4;
const FILMS_ADDED_ON_CLICK = 8;

const MoviesList = ({ movies }) => {
  const [viewFilmsCount, setViewFilmsCount] = useState(START_FILMS_COUNT);

  const addFilmsOnMoreButtonClick = () => {
    if(viewFilmsCount + FILMS_ADDED_ON_CLICK < movies.length-1) {
      setViewFilmsCount(viewFilmsCount + FILMS_ADDED_ON_CLICK);
    } else {
      setViewFilmsCount(movies.length);
    }
  }

  return (
    <>
      <div className="catalog__movies-list">
        {movies.slice(0, viewFilmsCount).map((movie, index) => <MovieItem key={movie.id} movie={movie} />)}
      </div>

      {viewFilmsCount !== movies.length
        ? <MoreButton onClick={addFilmsOnMoreButtonClick}/>
        : ''}
    </>
  );
};

export default MoviesList;
