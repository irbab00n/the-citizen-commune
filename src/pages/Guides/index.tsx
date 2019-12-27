import React from 'react';

// * COMPONENTS
import Page from '../../components/Layout/Page';

import Featured from '../../components/Guides/Featured';
import Popular from '../../components/Guides/Popular';
import Search from '../../components/Guides/Search';
import Topics from '../../components/Guides/Topics';

const Guides: React.FC = () => {
  return (
    <Page>
      <h1>Community Guides</h1>
      <Search />
      <Featured />
      <Popular />
      <Topics />
    </Page>
  );
};

export default Guides;
