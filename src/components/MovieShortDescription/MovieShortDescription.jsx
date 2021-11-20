import React from 'react';

const MovieShortDescription = ({title, genre, year, buttonsComponent}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>
      {buttonsComponent}
    </div>
  );
};

export default MovieShortDescription;
