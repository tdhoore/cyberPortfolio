import React from "react";
import { getNextProject } from "./api";

const ProjectCounter = (props: any) => {
  //gebruik push url

  const handleNextProject = (e: any, dir: number) => {
    getNextProject(dir);
  };

  return (
    <div className="projectCounter">
      <div className="rorator">
        <button
          className="diamondButton"
          onClick={(e) => handleNextProject(e, -1)}
        ></button>
        <div className="pixFont counter blurEffectText">{props.counter}</div>
        <button
          className="diamondButton"
          onClick={(e) => handleNextProject(e, 1)}
        ></button>
      </div>
    </div>
  );
};

export default ProjectCounter;
