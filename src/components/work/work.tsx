import React from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { props } from "./types";

const Work = (props: props) => {
  return (
    <section className="workSection">
      <header className="hide">
        <h2>Work</h2>
      </header>
      <ProjectCounter />
      <Project />
      <div className="spacer"></div>
    </section>
  );
};

export default Work;
