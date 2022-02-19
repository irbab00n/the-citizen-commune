import React from 'react';

import { SidebarNavigationToggleProps } from '../types';

const SidebarNavigationToggle = ({
  onClick,
  isExpanded,
}: SidebarNavigationToggleProps) => {
  return (
    <button onClick={onClick} className="SidebarNavigation__Toggle">
      <span
        className={`SidebarNavigation__ToggleLabel ${
          isExpanded ? ' show' : ''
        }`}
      >
        {isExpanded ? 'Close' : 'Open'}
      </span>
    </button>
  );
};

export default SidebarNavigationToggle;
