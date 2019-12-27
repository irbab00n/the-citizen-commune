import React from 'react';
import './Featured.scss';

import Row from '../../Layout/Row';
import Column from '../../Layout/Column';

interface FeaturedArticleProps {
  [key: string]: any;
}

const FeaturedArticle = (props: FeaturedArticleProps) => {
  return (
    <Row>
      <h2>Featured</h2>
      <Column className="FeaturedArticle">Featured Article Container</Column>
    </Row>
  );
};

export default FeaturedArticle;
