import React from 'react';
import './App.scss';

// * COMPONENTS
import Nav from './components/Nav';
import FeatureMenu from './components/FeatureMenu';
import HeroImage from './components/HeroImage';

// * ROUTING
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// * PAGES
import pages from './pages';

import minerWithRailgun from './assets/images/Miner-with-railgun.png';

// * APP HISTORY
export const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Nav />
      <FeatureMenu />
      <HeroImage imageURL={minerWithRailgun} />

      <Switch>
        {pages.map(page => (
          <Route
            path={page.endpoint}
            key={`app-page-${page.name}`}
            exact={page.exact}
            render={({ match }) => page.component(match)}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
