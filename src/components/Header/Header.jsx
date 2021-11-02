import React from 'react';

const Header = () => {
  return (
    <header class="page-header movie-card__head">
      <div class="logo">
        <a class="logo__link">
          <span class="logo__letter logo__letter--1">W</span>
          <span class="logo__letter logo__letter--2">T</span>
          <span class="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div class="user-block">
        <div class="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
  );
};

export default Header;
