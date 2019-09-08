import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/navigationBar';
import PrivateRoute from './containers/privateRoute';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map((route) => {
        const { path, isExact, component, isPrivate } = route;
        if (isPrivate) {
          return (
            <PrivateRoute
              key={path}
              exact={isExact}
              path={path}
              component={component}
            />
          );
        }
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
