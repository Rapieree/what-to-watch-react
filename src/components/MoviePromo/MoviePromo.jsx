import React from 'react';
import Header from '../Header/Header';
import MovieButtons from '../MovieButtons/MovieButtons';
import MovieShortDescription from '../MovieShortDescription/MovieShortDescription';
import Poster from '../Poster/Poster';

const MoviePromo = ({movie}) => {
  const {title, posterSrc, backgroundSrc, genre, year} = movie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundSrc} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster title={title} posterSrc={posterSrc} />
          <MovieShortDescription
            title={title}
            genre={genre}
            year={year}
            buttonsComponent={<MovieButtons />}
          />
        </div>
      </div>
    </section>
  );
};

export default MoviePromo;
