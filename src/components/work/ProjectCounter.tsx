import React from "react";
import { getNextProject } from "./api";

const ProjectCounter = (props: any) => {
  //gebruik push url

  const handleNextProject = (e: any, dir: number) => {
    getNextProject(dir);
  };

  return (
    <div className="projectCounter">
        <button
          className={props.hasButtons ? "defaultButton" : "hide"}
          onClick={(e) => handleNextProject(e, -1)}
        >&lt;&lt;&lt;&lt;&lt;</button>
        <div className="pixFont counter">{props.counter}</div>
        <button
          className={props.hasButtons ? "defaultButton second" : "hide"}
          onClick={(e) => handleNextProject(e, 1)}
        >&lt;&lt;&lt;&lt;&lt;</button>
    </div>
  );
};

export default ProjectCounter;
