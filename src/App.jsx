import React from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {useEffect} from 'react/cjs/react.development';
import './App.css';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {fetchMoviesList} from './services/api';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMoviesList(dispatch);
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
