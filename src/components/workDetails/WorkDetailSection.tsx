import React from "react";
import { workDetailSectionProps } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { useInView } from "react-intersection-observer";

const WorkDetailSection = (props: workDetailSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    view: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
    },
    start: {
      x: -50,
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section
      className="workDetailSection projectInfoImage"
      key={props.title + props.index}
    >
      <div className="accentBarAfter">
        <div className="info">
          <header>
            <h3>{props.title}</h3>
          </header>
          <p>{props.description}</p>
        </div>
      </div>
      <motion.div
        className="imageHolder"
        ref={ref}
        {...panelAnim}
        animate={inView ? "view" : "start"}
        variants={variants}
        transition={{
          duration: 0.3,
          stiffness: 700,
          damping: 60,
        }}
      >
        <img src={props.image} alt={props.title} />
      </motion.div>
    </section>
  );
};

export default WorkDetailSection;
