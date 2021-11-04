import React from 'react';
import { useState } from 'react/cjs/react.development';

const links = [
  "Overview",
  "Details",
  "Reviews",
]

const activeLinkClass = "movie-nav__item--active";

const getNavItemMarkup = (name, activeLink, onClickLinkCallback) => {
  return (
    <li className={activeLink === name ? "movie-nav__item " + activeLinkClass : "movie-nav__item"}>
      <a href="#" className="movie-nav__link" onClick={onClickLinkCallback}>{name}</a>
    </li>
  );
}

const MovieNav = ({ activeLink = links[0]}) => {
  const [active, setActive] = useState(activeLink);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {links.map((link) => getNavItemMarkup(link, active, (evt) => evt.preventDefault() & setActive(link)))}
      </ul>
    </nav>
  );
};

export default MovieNav;
