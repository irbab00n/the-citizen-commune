import React from 'react';

// * COMPONENTS
import Page from '../../components/Layout/Page';
import Row from '../../components/Layout/Row';
import Column from '../../components/Layout/Column';

import FeaturedArticle from '../../components/Guides/FeaturedArticle';
import TopicEntryPreview from '../../components/Guides/Topics/TopicEntryPreview';
import TopicBrowse from '../../components/Guides/Topics/TopicBrowse';
import TopicEntryList from '../../components/Guides/Topics/TopicEntryList';

const Guides: React.FC = () => {
  return (
    <Page>
      <h1>Community Guides</h1>
      <Row className="guide-search">Search</Row>
      <FeaturedArticle />
      <Row>
        <h2>Topics</h2>
        <TopicBrowse />
        <TopicEntryPreview />
        <TopicEntryList />
      </Row>
    </Page>
  );
};

export default Guides;
