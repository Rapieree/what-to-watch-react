import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import GenresList from './components/GenresList/GenresList';
import MoviesList from './components/MoviesList/MoviesList';
import { getMoviesList } from './mocks/movies-list';
import MoreButton from './components/MoreButton/MoreButton';

const movies = getMoviesList();

function App() {
  return (
    <>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList movies={movies} />

          {/* <MoreButton /> */}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
