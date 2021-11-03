import React from 'react';
import Logo from '../Logo/Logo';
import UserBlock from '../UserBlock/UserBlock';

const Header = () => {
  return (
    <header className="page-header movie-card__head">
      <Logo />
      <UserBlock />
    </header>
  );
};

export default Header;
