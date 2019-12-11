import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeatureSidebarNavigator.scss';

interface FeatureSidebarNavigatorProps {
  feature?: any;
  isExpanded?: boolean;
}

const FeatureSidebarNavigator = (props: FeatureSidebarNavigatorProps) => {
  const { isExpanded = false, feature } = props;
  const [navigatorExpanded, setNavigatorExpanded] = useState(isExpanded);

  useEffect(() => {
    setNavigatorExpanded(isExpanded);
  }, [isExpanded]);

  return (
    <li
      className={`feature-sidebar-navigator ${navigatorExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setNavigatorExpanded(true)}
      onMouseLeave={() => setNavigatorExpanded(isExpanded)}
    >
      <Link to={feature.endpoint} className={`feature-sidebar-navigator-link`}>
        {feature.icon(`feature-sidebar-navigator-icon `)}
        {navigatorExpanded ? (
          <span
            className={`feature-sidebar-navigator-name fade-in-label ${
              navigatorExpanded ? 'show' : ''
            }`}
          >
            {feature.name}
          </span>
        ) : (
          ''
        )}
      </Link>
    </li>
  );
};

export default FeatureSidebarNavigator;
