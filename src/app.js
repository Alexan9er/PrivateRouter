import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/navigationBar';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map((route) => {
        const { path, isExact, component, isPrivate } = route;

        return (
          <Route key={path} exact={isExact} path={path} component={component} />
        );
      })}
    </Switch>
  );

  return (
    <Router>
      <React.Fragment>
        <NavigationBar routes={routes.filter(route => route.isNavBar)} />
        <div>{renderSwitch()}</div>
      </React.Fragment>
    </Router>
  );
};

export default App;
