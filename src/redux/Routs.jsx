import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./configureStore";
import PageBase from "../components/_core/PageBase";

export default function () {
  //date
  const date = new Date();

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={withRouter((props) => (
            <PageBase {...props} pageCompName="Work" />
          ))}
        />
        <Route
          exact
          path="/Work"
          component={withRouter((props) => (
            <PageBase {...props} pageCompName="Work" />
          ))}
        />
        <Route
          path="/Work/:id"
          component={withRouter((props) => (
            <PageBase {...props} pageCompName="WorkDetail" />
          ))}
        />
        <Route
          exact
          path="/about"
          component={withRouter((props) => (
            <PageBase {...props} pageCompName="About" />
          ))}
        />
        <Route
          exact
          path="/contact"
          component={withRouter((props) => (
            <PageBase {...props} pageCompName="Contact" />
          ))}
        />
      </Switch>
      <footer className="hide"> &copy; {date.getFullYear()}</footer>
    </ConnectedRouter>
  );
}
