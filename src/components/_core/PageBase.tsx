import React from "react";
import NavMain from "../navMain/navMain";
import { useSelector } from "react-redux";
import Work from "../work/Work";
import About from "../about/About";
import Contact from "../contact/Contact";

const PageBase = (props: any) => {
  const navMainLinks = useSelector(
    (state: any) => state.navMainReducer.navLinks
  );

  const getActivePage = () => {
    switch (props.pageCompName) {
      case "Work":
        return <Work />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      default:
        return <Contact />;
    }
  };

  return (
    <div>
      <header>
        <h1>cyberportfolio</h1>
        <NavMain links={navMainLinks} />
      </header>
      <main>{getActivePage()}</main>
    </div>
  );
};

export default PageBase;
