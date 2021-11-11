import React from 'react';
import {useSelector} from 'react-redux';
import Footer from '../components/Footer/Footer';
import MovieCard from '../components/MovieCard/MovieCard';
import MoviesList from '../components/MoviesList/MoviesList';

const MovieDetailsPage = () => {
  const currentMovie = useSelector((state) => state.currentMovie);
  const similarMovies = useSelector((state) => state.similarMovies);

  return (
    <>
      <MovieCard movie={currentMovie} />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={similarMovies} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MovieDetailsPage;
