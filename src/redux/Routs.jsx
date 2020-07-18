import React from "react";
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./configureStore";
import PageBase from "../components/_core/PageBase";
import { AnimatePresence } from "framer-motion";
import Forground from "../components/_core/Forground";
import Background from "../components/_core/Background";

export default function () {
  //date
  const date = new Date();
  const location = useLocation();

  //<ConnectedRouter history={history}>
  // </ConnectedRouter>
  // <footer className="hide"> &copy; {date.getFullYear()}</footer>
  return (
    <div className="mainPage">
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            /*component={withRouter((props) => (
              <PageBase {...props} pageCompName="Home" />
            ))}*/
          >
            <PageBase pageCompName="Home" />
          </Route>
          <Route
            exact
            path="/Work"
            /*component={withRouter((props) => (
              <PageBase {...props} pageCompName="Work" />
            ))}*/
          >
            <PageBase pageCompName="Work" />
          </Route>
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
      </AnimatePresence>
      <Forground />
      <Background />
    </div>
  );
}
