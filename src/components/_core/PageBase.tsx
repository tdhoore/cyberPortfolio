import React from "react";
import NavMain from "../navMain/navMain";
import { useSelector } from "react-redux";
import { pageBase } from "./types";
import Home from "../home/Home";
import Work from "../work/Work";
import About from "../about/About";
import Contact from "../contact/Contact";
import WorkDetails from "../workDetails/WorkDetails";
import Forground from "./Forground";

const PageBase = (props: pageBase) => {
  const navMainLinks = useSelector(
    (state: any) => state.navMainReducer.navLinks
  );

  const getActivePage = () => {
    switch (props.pageCompName) {
      case "Home":
        return <Home />;
      case "Work":
        return <Work />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "WorkDetail":
        return <WorkDetails />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="basePage">
      <header>
        <h1 className="hide">Tim D'hoore</h1>
        <NavMain links={navMainLinks} />
      </header>
      <main>{getActivePage()}</main>
      <Forground />
    </div>
  );
};

export default PageBase;
