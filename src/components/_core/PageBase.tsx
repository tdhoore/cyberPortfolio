import React from "react";
import NavMain from "../navMain/navMain";
import { useSelector } from "react-redux";
import { pageBase } from "./types";
import Home from "../home/Home";
import Work from "../work/Work";
import About from "../about/About";
import Contact from "../contact/Contact";
import WorkDetails from "../workDetails/WorkDetails";

import { AnimatePresence } from "framer-motion";

const PageBase = (props: pageBase) => {
  const navMainLinks = useSelector(
    (state: any) => state.navMainReducer.navLinks
  );

  let title = "Tim D'hoore - ";

  const getActivePage = () => {
    switch (props.pageCompName) {
      case "Home":
        document.title = `${title}Portfolio`;
        return <Home key="Home" />;
      case "Work":
        document.title = `${title}Work`;
        return <Work key="Work" />;
      case "About":
        document.title = `${title}About`;
        return <About />;
      case "Contact":
        document.title = `${title}Contact`;
        return <Contact />;
      case "WorkDetail":
        document.title = `${title}${props.match.params.id}`;
        return <WorkDetails title={props.match.params.id} />;
      default:
        return <Home />;
    }
  };

  const test = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 5,
    },
  };

  return (
    <div className="basePage">
      <header>
        <h1 className="hide">Tim D'hoore</h1>
        <NavMain links={navMainLinks} activeLink={props.pageCompName} />
      </header>
      <main>{getActivePage()}</main>
    </div>
  );
};

export default PageBase;
