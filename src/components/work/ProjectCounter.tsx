import React from "react";
import { getNextProject } from "./api";
import { motion } from "framer-motion";
import { fadeInFlickerHalf, fadeInFlicker } from "../anim/animationPresets";

const ProjectCounter = (props: any) => {
  //gebruik push url

  const handleNextProject = (e: any, dir: number) => {
    getNextProject(dir);
  };

  return (
    <div className="projectCounter">
      <div className="rorator">
        <button
          className="diamondButton hide"
          onClick={(e) => handleNextProject(e, -1)}
        ></button>
        <div className="pixFont counter">{props.counter}</div>
        <button
          className="diamondButton hide"
          onClick={(e) => handleNextProject(e, 1)}
        ></button>
      </div>
    </div>
  );
};

export default ProjectCounter;
