import React, { useEffect } from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { props } from "./types";
import { getWork } from "./api";
import { useSelector } from "react-redux";
import ScrollDetector from "../_core/ScrollDetector";
import { getNextProject } from "./api";

const Work = (props: props) => {
  const work = useSelector((state: any) => state.workReducer.workItems);
  const currentItem = useSelector(
    (state: any) => state.workReducer.currentItem
  );
  const lengthWorkArray = useSelector(
    (state: any) => state.workReducer.workItems.length
  );

  useEffect(() => {
    //if there is no work here get it
    if (work.length === 0) {
      getWork();
    }

    //setup scroll support
    const scrollDetector = new ScrollDetector();

    const handleScroll = (e: Event) => {
      getNextProject(scrollDetector.dir);
    };

    //listen for updates
    window.addEventListener("updateScroll", handleScroll);

    return () => {
      scrollDetector.remove();
      window.removeEventListener("updateScroll", handleScroll);
    };
  });

  const setCounter = () => {
    let counter = "";

    for (let i = 0; i < lengthWorkArray; i++) {
      if (i === currentItem) {
        counter += "*";
      } else {
        counter += "_";
      }
    }

    return counter;
  };

  return (
    <section className="workSection">
      <div className="wrapper">
        <header className="hide">
          <h2>Work</h2>
        </header>

        <ProjectCounter counter={setCounter()} />
        <Project data={work[currentItem]} counter={setCounter()} />
      </div>
    </section>
  );
};

export default Work;
