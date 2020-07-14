import React from "react";
import { getNextProject } from "./api";
import { motion } from "framer-motion";
import { fadeInFlickerHalf } from "../anim/animationPresets";

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
        <motion.div
          {...fadeInFlickerHalf}
          className="pixFont counter blurEffectText"
        >
          {props.counter}
        </motion.div>
        <button
          className="diamondButton"
          onClick={(e) => handleNextProject(e, 1)}
        ></button>
      </div>
    </div>
  );
};

export default ProjectCounter;
