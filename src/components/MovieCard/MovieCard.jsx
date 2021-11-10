import React from 'react';
import Header from '../Header/Header';
import MovieButtons from '../MovieButtons/MovieButtons';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieOverview from '../MovieOverview/MovieOverview';
import MovieShortDescription from '../MovieShortDescription/MovieShortDescription';
import MovieTabs from '../MovieTabs/MovieTabs';
import Poster from '../Poster/Poster';

const posterImgExtraClass = `movie-card__poster--big`;

const MovieCard = ({movie}) => {
  const {title, posterSrc, backgroundSrc, genre, year} = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundSrc} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <MovieShortDescription
            title={title}
            genre={genre}
            year={year}
            buttonsComponent={
              <MovieButtons>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </MovieButtons>
            }
          />
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <Poster title={title} posterSrc={posterSrc} modifier={posterImgExtraClass} />

          <div className="movie-card__desc">
            <MovieTabs>
              <MovieOverview tabName="Overview" />
              <MovieDetails tabName="Details" />
            </MovieTabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
