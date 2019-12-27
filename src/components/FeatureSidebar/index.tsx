import React, { useState, useEffect } from 'react';
import './FeatureSidebar.scss';

import FeatureSidebarNavigator from './FeatureSidebarNavigator';

// *** UTILS ***
import { sliceFirstEndpointFromWindowLocation } from '../../utils/sliceFirstEndpointFromWindowLocation';

interface FeatureSidebarProps {
  children?: any;
  features?: any[];
}

const FeatureSidebar = (props: FeatureSidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<any>(null);
  const { features = [] } = props;

  useEffect(() => {
    let pathToFind = sliceFirstEndpointFromWindowLocation('pathname');
    let featureIndex = features.findIndex(
      feature => feature.endpoint === pathToFind
    );
    setSelectedFeatureIndex(featureIndex);
  }, []);

  return (
    <div className={`feature-sidebar ${isExpanded ? ' expanded' : ''}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="feature-sidebar-expand-button"
      >
        <i
          className={`feature-sidebar-expand-button-icon fas fa-angle-double-right ${
            isExpanded ? 'flipped' : ''
          }`}
        />
        <span className={`fade-in-label ${isExpanded ? ' show' : ''}`}>
          {isExpanded ? 'Collapse' : ''}
        </span>
      </button>
      <ul className="feature-sidebar-feature-list">
        {features.map((feature: any, index: number) => (
          <FeatureSidebarNavigator
            isExpanded={isExpanded}
            isSelected={selectedFeatureIndex === index}
            onSelect={() => {
              setSelectedFeatureIndex(index);
            }}
            feature={feature}
            key={`feature-sidebar-feature-list-item-${index}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeatureSidebar;
