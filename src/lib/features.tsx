import React from 'react';

const features = [
  {
    endpoint: '/guides',
    name: 'Guides',
    icon: (className: string) => <i className={`fas fa-book-reader ${className}`} />,
  },
  {
    endpoint: '/ships',
    name: 'Ships',
    icon: (className: string) => <i className={`fas fa-space-shuttle ${className}`} />,
  },
  {
    endpoint: '/clothing',
    name: 'Clothing',
    icon: (className: string) => <i className={`fas fa-user-astronaut ${className}`} />,
  },
  {
    endpoint: '/weapons',
    name: 'Weapons',
    icon: (className: string) => <i className={`fas fa-meteor ${className}`} />,
  },
];

export default features;
