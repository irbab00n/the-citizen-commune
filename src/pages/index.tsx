import React from 'react';

// * INTERFACES
import { RouteConfig } from '../interfaces/routes';

// * PAGES
import Home from './Home';

const pages: RouteConfig[] = [
  {
    endpoint: '/',
    name: 'Home',
    component: () => <Home />,
    exact: false,
  },
];

export default pages;
