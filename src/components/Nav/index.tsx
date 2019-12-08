import React from 'react';
import './Nav.scss';

import NavBrand from './NavBrand';

const Nav: React.FC = () => {
  return (
    <nav>
      <div className="nav-inner-wrapper">
        <NavBrand href="/">The Citizen Commune</NavBrand>
      </div>
    </nav>
  );
};

export default Nav;
