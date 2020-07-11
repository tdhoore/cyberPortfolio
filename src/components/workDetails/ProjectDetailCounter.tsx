import React from "react";

import { projectDetailCounterProps } from "./types";

const ProjectDetailCounter = (props: projectDetailCounterProps) => {
  const setCounter = () => {
    let counter = "";

    for (let i = 0; i < props.length; i++) {
      if (i === props.pageIndex) {
        counter += "*";
      } else {
        counter += "_";
      }
    }

    return counter;
  };

  const handleSetPageIndex = (e: any, dir: number) => {
    let newIndex = props.pageIndex + dir;

    if (newIndex < 0) {
      newIndex = 0;
    }

    if (newIndex > props.length - 1) {
      newIndex = props.length - 1;
    }

    props.setPageIndex(newIndex);
  };

  return (
    <div className="projectDetailCounter">
      <button
        className="diamondButton"
        onClick={(e) => handleSetPageIndex(e, -1)}
        disabled={props.pageIndex <= 0}
      ></button>
      <div className="pixFont counter blurEffectText">{setCounter()}</div>
      <button
        className="diamondButton"
        onClick={(e) => handleSetPageIndex(e, 1)}
        disabled={props.pageIndex >= props.length - 1}
      ></button>
    </div>
  );
};

export default ProjectDetailCounter;
