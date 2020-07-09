import React, { useEffect } from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { props } from "./types";
import { getWork } from "./api";
import { useSelector } from "react-redux";

const Work = (props: props) => {
  const work = useSelector((state: any) => state.workReducer.workItems);
  const currentItem = useSelector(
    (state: any) => state.workReducer.currentItem
  );

  useEffect(() => {
    //if there is no work here get it
    if (work.length === 0) {
      getWork();
    }
  });

  return (
    <section className="workSection">
      <div className="wrapper">
        <header className="hide">
          <h2>Work</h2>
        </header>
        <ProjectCounter />
        <Project data={work[currentItem]} />
      </div>
    </section>
  );
};

export default Work;
