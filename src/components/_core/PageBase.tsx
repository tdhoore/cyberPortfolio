import React from "react";
import { pageBase } from "./types";
import Home from "../home/Home";
import Work from "../work/Work";
import About from "../about/About";
import Contact from "../contact/Contact";
import WorkDetails from "../workDetails/WorkDetails";
import Page404 from "./Page404";
import { motion } from "framer-motion";
import { fade } from "../anim/animationPresets";

const PageBase = (props: pageBase) => {
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
        return <Page404 />;
    }
  };

  return (
    <motion.div className="mainHolder" {...fade}>
      {getActivePage()}
    </motion.div>
  );
};

export default PageBase;
