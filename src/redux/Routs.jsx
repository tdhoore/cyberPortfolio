import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import NavMain from "../components/navMain/navMain";
import PageBase from "../components/_core/PageBase";
import { useSelector } from "react-redux";
import Forground from "../components/_core/Forground";
import { useTransition, animated as a, interpolate } from "react-spring";

export default function () {
  const navMainLinks = useSelector((state) => state.navMainReducer.navLinks);

  //const [routeAnimating, setRouteAnimating] = useState(true);
  const trans = (x, y, z) =>
    `perspective(600px) translate3d(${x}px, ${y}px, ${z}px)`;
  //date
  const date = new Date();
  const location = useLocation();

  const transition = useTransition(location, location.pathname, {
    from: { o: 0 },
    enter: { o: 1 },
    leave: { o: 2 },
    config: { mass: 1, tension: 350, friction: 25 },
    onRest: () => {
      // setRouteAnimating(true);
    },
  });

  useEffect(() => {
    //console.log(location);
    //setRouteAnimating(false);
  }, [location]);

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
        {transition.map(({ item, props, key }) => (
          <a.div
            key={key}
            style={{
              position: "absolute",
              opacity: props.o.interpolate((o) => {
                console.log(o);
                return o;
              }),
            }}
            className="mainHolder"
          >
            <Switch location={item}>
              <Route exact path="/">
                <PageBase
                  pageCompName="Home"
                  test={item}
                  routeAnimating={props.o}
                />
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
        ))}
      </main>
      <Forground />
      <footer className="hide"> &copy; {date.getFullYear()}</footer>
    </div>
  );
}
