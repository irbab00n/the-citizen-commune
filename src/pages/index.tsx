import React from 'react';

// * INTERFACES
import { RouteConfig } from '../interfaces/RouteConfig';

// * PAGES
import Home from './Home';

const pages: RouteConfig[] = [
  {
    endpoint: '/',
    name: 'Home',
    component: () => <Home />,
    exact: true,
  },
];

export default pages;
