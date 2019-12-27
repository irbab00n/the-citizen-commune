import React from 'react';

import Row from '../../Layout/Row';
import Column from '../../Layout/Column';

interface PopularGuidesProps {
  [key: string]: any;
}

const PopularGuides = (props: PopularGuidesProps) => {
  return (
    <Row className="PopularGuides">
      <h2>Popular</h2>
      <Column className="PopularGuidesList">Popular Guides List</Column>
    </Row>
  );
};

export default PopularGuides;
