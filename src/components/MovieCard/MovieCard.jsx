import React from 'react';
import Header from '../Header/Header';
import MovieCardButtons from '../MovieCardButtons/MovieCardButtons';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieOverview from '../MovieOverview/MovieOverview';
import MovieTabs from '../MovieTabs/MovieTabs';

const getBackgroundMarkup = (srcimage, altText) => {
  return (
    <div className="movie-card__bg">
      <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
    </div>
  );
}

const getPosterMarkup = (isFullCard) => {
  return (
    <div className={isFullCard ? "movie-card__poster movie-card__poster--big" : "movie-card__poster"}>
      <img src="/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
        height="327" />
    </div>
  );
}

const getMovieShortDesc = (title, genre, year, buttons) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">Drama</span>
        <span className="movie-card__year">2014</span>
      </p>

      {buttons}

    </div>
  );
};

const MovieCard = ({ isFullCard = false }) => {

  if (isFullCard) {
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          {getBackgroundMarkup()}

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            {getMovieShortDesc("", "", "", <MovieCardButtons />)}
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            {getPosterMarkup(true)}

            <div className="movie-card__desc">
              <MovieTabs>
                <MovieOverview tabName="Overview"/>
                <MovieDetails tabName="Details" />
              </MovieTabs>
            </div>


          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="movie-card">
      {getBackgroundMarkup()}

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div class="movie-card__wrap">
        <div class="movie-card__info">
          {getPosterMarkup()}
          {getMovieShortDesc("", "", "", <MovieCardButtons />)}
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
