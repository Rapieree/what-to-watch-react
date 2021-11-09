import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../store/actions';
import {genres} from '../../utils/const';
import GenresItem from '../GenresItem/GenresItem';

const GenresList = () => {
  const activeGenre = useSelector((state) => state.activeGenre);

  const dispatch = useDispatch();

  const onClickLink = (evt, genre) => {
    evt.preventDefault();
    dispatch(Action.setGenre(genre));
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
              onClickLink={(evt) => onClickLink(evt, genre)}
            />
          );
        })
      }
    </ul>
  );
};

export default GenresList;
