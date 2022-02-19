import React from 'react';
import './Navbar.scss';

import NavBrand from './NavBrand';

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <nav>
        {/* Include "Skip to Main" */}
        <NavBrand href="/">COSBYTES</NavBrand>
        {/* If we need left-hand, right-hand displays, separate with a flex-grow flexbox */}
        {/* Everything supposed to be on the "right-hand" side below */}
      </nav>
    </div>
  );
};

export default Navbar;
