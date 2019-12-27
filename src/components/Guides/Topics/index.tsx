import React from 'react';

import Row from '../../Layout/Row';
import TopicEntryPreview from './TopicEntryPreview';
import TopicBrowse from './TopicBrowse';
import TopicEntryList from './TopicEntryList';

interface GuideTopicsProps {
  [key: string]: any;
}

const GuideTopics = (props: GuideTopicsProps) => {
  return (
    <Row>
      <h2>Topics</h2>
      <TopicBrowse />
      <TopicEntryPreview />
      <TopicEntryList />
    </Row>
  );
};

export default GuideTopics;
