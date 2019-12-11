import React from 'react';
import './App.scss';

// * COMPONENTS
import Nav from './components/Nav';
// import FeatureMenu from './components/FeatureMenu';
import FeatureSidebar from './components/FeatureSidebar';

// * ROUTING
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// * PAGES
import features from './lib/features';
import pages from './pages';

// * APP HISTORY
export const history = createBrowserHistory();

// ! May need to add state-based control for current view layout
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Nav />
      <div className="app-layout">
        <FeatureSidebar features={features} />
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
      </div>
    </Router>
  );
};

export default App;
