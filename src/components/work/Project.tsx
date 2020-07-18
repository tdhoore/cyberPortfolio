import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./types";
import { motion } from "framer-motion";
import {
  fadeInFlicker,
  fadeInFlickerHalf,
  workTransitionIn,
  fadeInFlickerScale,
  updateWork,
  workTransitionExit,
} from "../anim/animationPresets";
import DecoNumbers from "../_core/DecoNumbers";

const Project = (props: ProjectProps) => {
  return props.data !== undefined ? (
    <motion.article className="project" {...updateWork}>
      <div className="projectTitle">
        <header>
          <h3>
            <motion.span {...fadeInFlickerScale}>
              {props.data.title}
            </motion.span>
          </h3>
        </header>
        <motion.div
          className="defaultButtonHolder"
          {...fadeInFlicker}
          transition={{ ...fadeInFlicker.transition, delay: 0.4 }}
        >
          <Link to={`/work/${props.data.title}`} className="defaultButton">
            Show me more
          </Link>
        </motion.div>
        <motion.div
          className="pixFont counter blurEffectText"
          {...fadeInFlickerHalf}
          transition={{ ...fadeInFlickerHalf.transition, delay: 0.5 }}
        >
          {props.counter}
        </motion.div>
        <motion.div
          className="pixFont counter firstCounter blurEffectText"
          {...fadeInFlickerHalf}
          transition={{ ...fadeInFlickerHalf.transition, delay: 0.5 }}
        >
          {props.counter}
        </motion.div>
      </div>
      <div className="projectImage">
        <div className="image">
          <motion.img
            src={props.data.image}
            alt={props.data.title}
            {...workTransitionIn}
            {...workTransitionExit}
          />
        </div>
        <DecoNumbers />
      </div>
    </motion.article>
  ) : (
    <div></div>
  );
};

export default Project;
