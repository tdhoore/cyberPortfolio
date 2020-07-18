import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NavMain from "../components/navMain/navMain";
import PageBase from "../components/_core/PageBase";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Forground from "../components/_core/Forground";
import Background from "../components/_core/Background";

export default function () {
  const navMainLinks = useSelector((state) => state.navMainReducer.navLinks);

  //date
  const date = new Date();
  const location = useLocation();

  return (
    <div className="mainPage">
      <header>
        <h1 className="hide">Tim D'hoore</h1>
        <NavMain links={navMainLinks} activeLink={location.pathname} />
      </header>
      <main>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <PageBase pageCompName="Home" />
            </Route>
            <Route exact path="/work">
              <PageBase pageCompName="Work" />
            </Route>
            <Route
              exact
              path="/work/:id"
              component={(props) => (
                <PageBase pageCompName="WorkDetail" {...props} />
              )}
            ></Route>
            <Route exact path="/about">
              <PageBase pageCompName="About" />
            </Route>
            <Route exact path="/contact">
              <PageBase pageCompName="Contact" />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Forground />
      <Background activePage={location.pathname} />
      <footer className="hide"> &copy; {date.getFullYear()}</footer>
    </div>
  );
}
