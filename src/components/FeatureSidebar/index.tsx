import React, { useState } from 'react';
import './FeatureSidebar.scss';

import FeatureSidebarNavigator from './FeatureSidebarNavigator';

interface FeatureSidebarProps {
  children?: any;
  features?: any[];
}

const FeatureSidebar = (props: FeatureSidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { features = [] } = props;

  return (
    <div className={`feature-sidebar${isExpanded ? ' expanded' : ''}`}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="feature-sidebar-expand-button">
        <i
          className={`feature-sidebar-expand-button-icon fas fa-angle-double-right ${
            isExpanded ? 'flipped' : ''
          }`}
        />
        <span className={`fade-in-label${isExpanded ? ' show' : ''}`}>
          {isExpanded ? 'Collapse' : ''}
        </span>
      </button>
      <ul className="feature-sidebar-feature-list">
        {features.map((feature: any, index: number) => (
          <FeatureSidebarNavigator
            isExpanded={isExpanded}
            feature={feature}
            key={`feature-sidebar-feature-list-item-${index}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeatureSidebar;
