import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      {/* <Route path="/details-films">
        <MovieDetailsPage />
      </Route> */}
      <Route exact path="/details-films/:id">
        <MovieDetailsPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
