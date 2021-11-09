import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {useDispatch} from 'react-redux';
import {getMoviesList} from './mocks/movies-list';
import {useEffect} from 'react/cjs/react.development';
import {Action} from './store/actions';

const movies = getMoviesList();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.setMovies(movies));
  }, movies);

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
