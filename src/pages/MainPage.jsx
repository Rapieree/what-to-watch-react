import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react/cjs/react.development';
import Footer from '.././components/Footer/Footer';
import GenresList from '.././components/GenresList/GenresList';
import LoadMoviesListWrapper from '../components/LoadMoviesListWrapper/LoadMoviesListWrapper';
import MoviePromo from '../components/MoviePromo/MoviePromo';
import {setCurrentMovieIdAction} from '../store/actions';


function MainPage() {
  const currentMovie = useSelector((state) => state.currentMovie);
  const currentMovieId = useSelector((state) => state.currentMovieId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentMovieId) {
      dispatch(setCurrentMovieIdAction(1));
    }
  }, []);

  return (
    <>
      <MoviePromo movie={currentMovie}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <LoadMoviesListWrapper />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
