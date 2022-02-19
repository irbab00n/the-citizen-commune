import React from 'react';
import './App.scss';

// * COMPONENTS
import Nav from '../GlobalNavigation';
import SidebarNavigation from '../SidebarNavigation';

// * ROUTING
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// * PAGES
import pages from '../../pages';

import useStore, { initStore } from '../../hooks/useStore';

// * APP HISTORY
export const history = createBrowserHistory();

const appActionTypes = {};

const appActions = {};

initStore(appActions);

// ! May need to add state-based control for current view layout
const App: React.FC = () => {
  const { store } = useStore();

  return (
    <Router history={history}>
      <Nav />
      <div className="main">
        <Switch>
          <SidebarNavigation pages={pages} />
          {pages.map((page) => (
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
