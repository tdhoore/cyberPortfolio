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
import { Helmet } from "react-helmet";

const PageBase = (props: pageBase) => {
  let title = "Tim D'hoore - ";
  let url = "https://www.timdhoore.com";

  const getActivePage = () => {
    switch (props.pageCompName) {
      case "Home":
        title = `${title}Portfolio`;
        url += "/";
        
        document.title = title;
        return <Home key="Home" />;
      case "Work":
        title = `${title}Work`;
        url += "/work";

        document.title = `${title}Work`;
        return <Work key="Work" />;
      case "About":
        title = `${title}About`;
        url += "/about";

        document.title = `${title}About`;
        return <About />;
      case "Contact":
        title = `${title}Contact`;
        url += "/contact";
        
        document.title = `${title}Contact`;
        return <Contact />;
      case "WorkDetail":
        title = `${title}${props.match.params.id}`;
        url += `/work/${props.match.params.id}`;
        
        document.title = `${title}${props.match.params.id}`;
        return <WorkDetails title={props.match.params.id} />;
      default:
        return <Page404 />;
    }
  };

  return (
    <motion.div className="mainHolder" {...fade}>
      <Helmet>
        <meta property="og:title" content={title}/>
        <meta property="og:site_name" content="Tim D'hoore - portfolio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="assets/img/socialImage.jpg"/>
        <meta property="og:url" content={url}/>
        <meta property="og:description" content="I’m Tim D'hoore, a front-end developer with a passion for creating unique interactive websites by using 3d elements, animation and handcrafted images."/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Helmet>
      {getActivePage()}
    </motion.div>
  );
};

export default PageBase;
