import React from "react";
import { RollPanelProps } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { useInView } from "react-intersection-observer";

const RollPanel = (props: RollPanelProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    view: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
    },
    start: {
      y: 0,
      x: -50,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="panel"
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
      <dt>{props.title}</dt>
      <dd>{props.value}</dd>
    </motion.div>
  );
};

export default RollPanel;
