import React from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {useEffect} from 'react/cjs/react.development';
import './App.css';
import {getMoviesList} from './mocks/movies-list';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {getCurrentMovieAction, getMoviesAction} from './store/actions';

const movies = getMoviesList();
const currentMovie = movies[0];

const App = () => {
  const dispatch = useDispatch();

  dispatch(getCurrentMovieAction(currentMovie));

  useEffect(() => {
    dispatch(getMoviesAction(movies));
  }, [movies]);

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
