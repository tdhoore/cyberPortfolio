import React, { Fragment, useRef } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import NavMain from "../components/navMain/navMain";
import PageBase from "../components/_core/PageBase";
import { useSelector } from "react-redux";
import Forground from "../components/_core/Forground";
import { useTransition, animated as a } from "react-spring";
import { Canvas, Dom } from "react-three-fiber/css3d";
import DOMObject from "../components/_core/DOMObject";
import Portal from "../components/_core/Portal";
import { Html } from "@react-three/drei";

export default function () {
  const navMainLinks = useSelector((state) => state.navMainReducer.navLinks);
  //date
  const date = new Date();
  const location = useLocation();

  const ref = useRef(null);

  const trans = (x, y, z) =>
    `perspective(600px) translate3d(${x}px, ${y}px, ${z}px)`;

  const transition = useTransition(location, location.pathname, {
    from: { opacity: 0, transform: trans(0, 0, -200) },
    enter: { opacity: 1, transform: trans(0, 0, 0) },
    leave: { opacity: 0, transform: trans(0, 0, 100) },
    config: { mass: 1, tension: 350, friction: 25 },
  });

  return (
    <div className="mainPage">
      <header className="mainHeader">
        <Link
          to="/"
          className={location.pathname.includes("/work/") ? "hide" : "title"}
        >
          <h1>
            <span>Tim D'hoore</span>
          </h1>
        </Link>
        <NavMain links={navMainLinks} activeLink={location.pathname} />
      </header>
      <main>
        <Fragment>
          <Canvas>
            <DOMObject dom={ref} position={[0, 0, -20]} />

            {/*transition.map(({ item, props, key }) => (
            <a.div key={key} style={props} className="mainHolder">
              <Switch location={item}>
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
                <Route>
                  <PageBase pageCompName="404" />
                </Route>
              </Switch>
            </a.div>
                  ))*/}
          </Canvas>
          <Portal>
            <div ref={ref}>hello</div>
          </Portal>
        </Fragment>
      </main>
      <Forground />
      <footer className="hide"> &copy; {date.getFullYear()}</footer>
    </div>
  );
}
