import React from "react";
import Project from "./Project";
import { props } from "./types";

const Work = (props: props) => {
  return (
    <section>
      <header className="hide">
        <h2>Work</h2>
      </header>
      <Project />
    </section>
  );
};

export default Work;
