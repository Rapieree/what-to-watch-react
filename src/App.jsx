import React from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {useEffect} from 'react/cjs/react.development';
import './App.css';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {loadDetailsMovieAsyncAction, loadMoviesAsyncAction, loadSimilarMoviesAsyncAction} from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMoviesAsyncAction());
    dispatch(loadDetailsMovieAsyncAction(1));
    dispatch(loadSimilarMoviesAsyncAction(1));
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
