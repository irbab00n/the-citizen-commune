import React from 'react';

// * INTERFACES
import { RouteConfig } from '../interfaces/routes';

// * PAGES
import Armor from './Armor';
import Guides from './Guides';
import Home from './Home';
import Ships from './Ships';
import Weapons from './Weapons';

const pages: RouteConfig[] = [
  {
    endpoint: '/clothing',
    name: 'Clothing',
    component: () => <Armor />,
    exact: false,
  },
  {
    endpoint: '/guides',
    name: 'Guides',
    component: () => <Guides />,
    exact: false,
  },
  {
    endpoint: '/',
    name: 'Home',
    component: () => <Home />,
    exact: true,
  },
  {
    endpoint: '/ships',
    name: 'Ships',
    component: () => <Ships />,
    exact: false,
  },
  {
    endpoint: '/weapons',
    name: 'Weapons',
    component: () => <Weapons />,
    exact: false,
  },
];

export default pages;
