import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useEffect} from 'react/cjs/react.development';
import Footer from '.././components/Footer/Footer';
import GenresList from '.././components/GenresList/GenresList';
import MovieCard from '.././components/MovieCard/MovieCard';
import MoviesList from '.././components/MoviesList/MoviesList';
import {ALL_GENRES} from '../utils/const';

const getFilteredMovies = (movies, activeGenre) => {
  if (activeGenre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === activeGenre);
};

function MainPage() {
  const movies = useSelector((state) => state.movies);
  const activeGenre = useSelector((state) => state.activeGenre);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(getFilteredMovies(movies, activeGenre));
  }, [movies, activeGenre]);

  return (
    <>
      <MovieCard isFullCard={false}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList movies={filteredMovies} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
