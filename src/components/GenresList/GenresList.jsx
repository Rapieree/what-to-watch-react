import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {genres} from '../../utils/const';
import GenresItem from '../GenresItem/GenresItem';
import {setGenreAction} from '../../store/actions';

const GenresList = () => {
  const activeGenre = useSelector((state) => state.activeGenre);

  const dispatch = useDispatch();

  const onLinkClick = (evt, genre) => {
    evt.preventDefault();
    dispatch(setGenreAction(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          return (
            <GenresItem
              key={genre}
              genre={genre}
              isActive={genre === activeGenre ? true : false}
              onLinkClick={(evt) => onLinkClick(evt, genre)}
            />
          );
        })
      }
    </ul>
  );
};

export default GenresList;
