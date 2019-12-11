import React from 'react';

// * COMPONENTS
import HeroImage from '../../components/HeroImage';
import Page from '../../components/Layout/Page';

import minerWithRailgun from '../../assets/images/Miner-with-railgun.png';

const Home: React.FC = () => {
  return (
    <Page>
      <h1>Welcome to The Citizen Commune</h1>
      <h3>The best place for new players to learn about Star Citizen</h3>
      <HeroImage imageURL={minerWithRailgun} />
      <p>
        This website is a fan work of apprciation and support of an amazing project featuring some
        revolutionary approaches to game development.
      </p>
    </Page>
  );
};

export default Home;
