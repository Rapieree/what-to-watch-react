import React from 'react';
import Footer from '../components/Footer/Footer';
import MovieCard from '../components/MovieCard/MovieCard';
import MoviesList from '../components/MoviesList/MoviesList';
import {getMoviesList} from '../mocks/movies-list';

const movies = getMoviesList().slice(0, 8);

const MovieDetailsPage = () => {
  return (
    <>
      <MovieCard isFullCard={true} />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={movies} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MovieDetailsPage;
