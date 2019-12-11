import React from 'react';
import './FeatureMenu.scss';

const mockFeatures = ['Feature 1', 'Feature 2', 'Feature 3'];

const FeatureMenu: any = () => {
  return (
    <div className="feature-menu">
      <div className="feature-menu-inner-wrapper">
        <ul className="feature-list">
          {mockFeatures.map((feature: string) => (
            <li className="feature-list-item">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureMenu;
