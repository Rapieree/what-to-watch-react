import React from 'react';
import {useState} from 'react/cjs/react.development';

const links = [
  `Overview`,
  `Details`,
  `Reviews`,
];

const activeLinkClass = `movie-nav__item--active`;

const getNavItemMarkup = (name, activeLink, onClickLink) => {
  return (
    <li
      className={activeLink === name ? `movie-nav__item ` + activeLinkClass : `movie-nav__item`}
      key={name}
    >
      <a
        href="#"
        className="movie-nav__link"
        onClick={onClickLink}
      >{name}</a>
    </li>
  );
};

const MovieNav = ({activeLink, setActiveTab}) => {
  const [active, setActive] = useState(activeLink);

  const onClickLink = (evt, link) => {
    evt.preventDefault();
    setActive(link);
    setActiveTab(link);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {links.map((link) => getNavItemMarkup(link, active, (evt) => onClickLink(evt, link)))}
      </ul>
    </nav>
  );
};

export default MovieNav;
