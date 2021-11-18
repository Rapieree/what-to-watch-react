import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {useEffect} from 'react/cjs/react.development';
import Footer from '../components/Footer/Footer';
import MovieCard from '../components/MovieCard/MovieCard';
import MoviesList from '../components/MoviesList/MoviesList';
import {getCurrentMovieIdAction} from '../store/actions';

const MovieDetailsPage = () => {
  const currentMovie = useSelector((state) => state.currentMovie);
  const similarMovies = useSelector((state) => state.similarMovies);
  const currentMovieId = useSelector((state) => state.currentMovieId);

  const dispatch = useDispatch();

  const routerId = Number(useParams().id);

  useEffect(() => {
    if (routerId !== currentMovieId) {
      dispatch(getCurrentMovieIdAction(routerId));
    }
  }, [routerId]);

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
