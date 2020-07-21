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
    <Link to={`/work/${props.data.title}`} className="projectPage">
      <article className="project">
        <div className="projectTitle borderBox">
          <header>
            <h3>
              <motion.span {...fadeInFlickerScale}>
                {props.data.title}
              </motion.span>
            </h3>
            <p>Sub title</p>
          </header>
          <motion.div
            className="defaultButtonHolder"
            {...fadeInFlicker}
            transition={{ ...fadeInFlicker.transition, delay: 0.4 }}
          >
            <Link to={`/work/${props.data.title}`} className="defaultButton">
              See more
            </Link>
          </motion.div>
        </div>
        <div className="projectImage window">
          <div className="image">
            <motion.img
              src={props.data.image}
              alt={props.data.title}
              {...workTransitionIn}
              {...workTransitionExit}
            />
          </div>
        </div>
      </article>
    </Link>
  ) : (
    <div></div>
  );
};

export default Project;
