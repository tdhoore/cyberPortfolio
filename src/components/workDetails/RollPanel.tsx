import React from "react";
import { RollPanelProps } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { useInView } from "react-intersection-observer";

const RollPanel = (props: RollPanelProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div className="panel" ref={ref}>
      <dt>{props.title}</dt>
      <dd>{props.value}</dd>
    </motion.div>
  );
};

export default RollPanel;
