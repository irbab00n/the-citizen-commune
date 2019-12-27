import React from 'react';
import './Featured.scss';

import Row from '../../Layout/Row';
import Column from '../../Layout/Column';

interface FeaturedGuideProps {
  [key: string]: any;
}

const FeaturedGuide = (props: FeaturedGuideProps) => {
  return (
    <Row>
      <h2>Featured</h2>
      <Column className="FeaturedGuide">Featured Guide Container</Column>
    </Row>
  );
};

export default FeaturedGuide;
