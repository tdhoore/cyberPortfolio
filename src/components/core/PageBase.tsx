import React from "react";
import NavMain from "../navMain/navMain";
import { useSelector } from "react-redux";

const PageBase = (props: any) => {
  const navMainLinks = useSelector(
    (state: any) => state.navMainReducer.navLinks
  );

  return (
    <div>
      <header>
        <h1>cyberportfolio</h1>
        <NavMain links={navMainLinks} />
      </header>
      <main></main>
    </div>
  );
};

export default PageBase;
