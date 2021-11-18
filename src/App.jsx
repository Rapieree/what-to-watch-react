import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {useEffect} from 'react/cjs/react.development';
import './App.css';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {loadDetailsMovieAction, loadMoviesAction, loadSimilarMoviesAction} from './store/actions';

const App = () => {
  const currentMovieId = useSelector((state) => state.currentMovieId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentMovieId) {
      dispatch(loadDetailsMovieAction(currentMovieId));
      dispatch(loadSimilarMoviesAction(currentMovieId));
    }
  }, [currentMovieId]);

  useEffect(() => {
    dispatch(loadMoviesAction());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/films/:id">
          <MovieDetailsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
