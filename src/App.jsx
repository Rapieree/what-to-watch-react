import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {

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
}

export default App;
