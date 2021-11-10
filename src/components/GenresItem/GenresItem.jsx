import React from 'react';

const GenresItem = ({genre, isActive, onLinkClick}) => {
  return (
    <li className={isActive ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link" onClick={onLinkClick}>{genre}</a>
    </li>
  );
};

export default GenresItem;
