import React from 'react';
import Logo from '../Logo/Logo';

//  logo__link--light

const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo modifier="logo__link--light" />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
