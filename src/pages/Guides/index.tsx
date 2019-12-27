import React from 'react';

// * COMPONENTS
import Page from '../../components/Layout/Page';
import Row from '../../components/Layout/Row';

const Guides: React.FC = () => {
  return (
    <Page>
      <h1>Community Guides</h1>
      <Row className="guide-search">Search</Row>
    </Page>
  );
};

export default Guides;
