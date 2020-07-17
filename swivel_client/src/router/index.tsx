import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../component/";
import NavBar from "../component/nav/navbar";
import Gest from "../component/gest";
import { useAuth0 } from "@auth0/auth0-react";

export const history = createBrowserHistory();

const AppRouter = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={isAuthenticated ? Home : Gest} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
