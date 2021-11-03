import React, { useState } from 'react';
import ReactDom from 'react-dom';
import GenresList from '.././components/GenresList/GenresList';
import MoviesList from '.././components/MoviesList/MoviesList';
import { getMoviesList } from '.././mocks/movies-list';
import Footer from '.././components/Footer/Footer';
import MovieCard from '.././components/MovieCard/MovieCard';

const movies = getMoviesList();

function MainPage() {
  const [moviesList, setMoviesList] = useState(movies);

  const FilterMoviesByGenre = (genre) => {
    if(genre === "All genres") setMoviesList(movies);
    else setMoviesList([...movies].filter((movie) => movie.genre === genre))
  };

  return (
    <>
      <MovieCard />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList FilterMoviesByGenre={FilterMoviesByGenre}/>

          <MoviesList movies={moviesList} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
