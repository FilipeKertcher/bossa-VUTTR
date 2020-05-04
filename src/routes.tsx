import { Switch, Route, Router, Redirect } from "react-router-dom";
import React from "react";

import HomeScreen from "pages/Home";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  /* pass a configuration object here if needed */
});

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default Routes;
