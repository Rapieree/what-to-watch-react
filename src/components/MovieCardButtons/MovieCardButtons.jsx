import React from 'react';

const MovieCardButtons = () => {
  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use href="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use href="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    </div>
  );
};

export default MovieCardButtons;
