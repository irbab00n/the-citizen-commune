import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeatureSidebarNavigator.scss';

import { sliceFirstEndpointFromWindowLocation } from '../../utils/sliceFirstEndpointFromWindowLocation';

interface FeatureSidebarNavigatorProps {
  feature?: any;
  isExpanded?: boolean;
  isSelected?: boolean;
  onSelect?: Function;
}

const FeatureSidebarNavigator = (props: FeatureSidebarNavigatorProps) => {
  const {
    isExpanded = false,
    isSelected = false,
    feature,
    onSelect = () =>
      console.log('default FeatureSidebarNavigator onSelect running...'),
  } = props;
  const [navigatorExpanded, setNavigatorExpanded] = useState(isExpanded);

  useEffect(() => {
    setNavigatorExpanded(isExpanded);
  }, [isExpanded]);

  return (
    <li
      className={`feature-sidebar-navigator ${
        navigatorExpanded ? 'expanded' : ''
      } ${isSelected ? 'selected' : ''}`}
      onMouseEnter={() => setNavigatorExpanded(true)}
      onMouseLeave={() => setNavigatorExpanded(isExpanded)}
      onClick={() => onSelect()}
    >
      <Link to={feature.endpoint} className={`feature-sidebar-navigator-link`}>
        {feature.icon(
          `feature-sidebar-navigator-icon ${isSelected ? 'selected' : ''}`
        )}
        {navigatorExpanded ? (
          <span
            className={`feature-sidebar-navigator-name fade-in-label ${
              navigatorExpanded ? 'show' : ''
            }
            ${isSelected ? 'selected' : ''}`}
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
