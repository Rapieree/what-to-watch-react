import React from 'react';
import MovieNav from '../MovieNav/MovieNav';

const MovieTabs = ({ children }) => {
  return (
    <>
      <MovieNav />

      {children}
    </>
  );
};

export default MovieTabs;
