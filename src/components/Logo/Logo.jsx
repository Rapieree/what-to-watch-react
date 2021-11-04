import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const getLogoLinkMarkup = (modifier, currentUrl) => {
  if (currentUrl === "/") {
    return (
      <a className={"logo__link " + modifier} >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    );
  }

  return (
    <Link className={"logo__link " + modifier} to="/">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

const Logo = ({ modifier = '' }) => {
  const location = useLocation();


  return (
    <div className="logo">
      {getLogoLinkMarkup(modifier, location.pathname)}
    </div>
  );
};

export default Logo;
