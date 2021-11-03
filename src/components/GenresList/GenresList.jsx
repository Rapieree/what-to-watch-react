import React, { useState } from 'react';
import GenresItem from '../GenresItem/GenresItem';

const genres = [
  "All genres",
  "Comedies",
  "Crime",
  "Documentary",
  "Dramas",
  "Horror",
  "Kids & Family",
  "Romance",
  "Sci-Fi",
  "Thrillers",
];

const GenresList = ({FilterMoviesByGenre}) => {
  const [activeGenre, setActiveGenre] = useState("All genres");

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <GenresItem
          key={genre}
          genre={genre}
          isActive={genre === activeGenre ? true : false}
          onClick={(evt) => evt.preventDefault() & setActiveGenre(genre) & FilterMoviesByGenre(genre) }
        />
      )}
    </ul>
  );
};

export default GenresList;
