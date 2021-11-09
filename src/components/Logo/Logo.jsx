import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const disabledClass = `logo__link--disabled`;

const Logo = ({modifier}) => {
  const location = useLocation();

  return (
    <div className="logo">
      <Link className={location.pathname !== `/` ? `logo__link ${modifier}` : `logo__link ${disabledClass} ${modifier}`} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
