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
    let result = <div></div>;

    navMainLinks.forEach((link: any) => {
      if (link.isActive) {
        switch (link.title) {
          case "Work":
            result = <Work />;
            break;
          case "About":
            result = <About />;
            break;
          case "Contact":
            result = <Contact />;
            break;
          default:
            result = <Contact />;
        }
      }
    });

    return result;
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
