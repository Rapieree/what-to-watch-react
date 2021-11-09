import React from 'react';

const GenresItem = ({genre, isActive, onClick}) => {
  return (
    <li className={isActive ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link" onClick={onClick}>{genre}</a>
    </li>
  );
};

export default GenresItem;
