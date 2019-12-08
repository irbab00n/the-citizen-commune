import React from 'react';
import { Link } from 'react-router-dom';
import './NavBrand.scss';

interface NavBrandProps {
  [key: string]: any;
  href?: string;
  children?: any;
}

const NavBrand = (props: NavBrandProps) => {
  const { children, href = '' } = props;
  return (
    <Link className="nav-brand" to={href}>
      {children}
    </Link>
  );
};

export default NavBrand;
