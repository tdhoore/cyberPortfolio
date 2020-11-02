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
  let url = "https://www.timdhoore.com";

  const getActivePage = () => {
    switch (props.pageCompName) {
      case "Home":
        title = `${title}Portfolio`;
        url += "/";
        
        document.title = title;
        return <Home key="Home"/>;
      case "Work":
        title = `${title}Work`;
        url += "/work";

        document.title = title;
        return <Work key="Work" />;
      case "About":
        title = `${title}About`;
        url += "/about";

        document.title = title;
        return <About />;
      case "Contact":
        title = `${title}Contact`;
        url += "/contact";
        
        document.title = title;
        return <Contact />;
      case "WorkDetail":
        title = `${title}${props.match.params.id}`;
        url += `/work/${props.match.params.id}`;
        
        document.title = title;
        return <WorkDetails url={props.match.params.id} />;
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
