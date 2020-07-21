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
        <motion.button
          {...fadeInFlicker}
          className="diamondButton hide"
          onClick={(e) => handleNextProject(e, -1)}
        ></motion.button>
        <motion.div
          {...fadeInFlickerHalf}
          className="pixFont counter blurEffectText"
        >
          {props.counter}
        </motion.div>
        <motion.button
          {...fadeInFlicker}
          className="diamondButton hide"
          onClick={(e) => handleNextProject(e, 1)}
        ></motion.button>
      </div>
    </div>
  );
};

export default ProjectCounter;
