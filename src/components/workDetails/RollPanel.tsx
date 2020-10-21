import React from "react";
import { RollPanelProps } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { useInView } from "react-intersection-observer";

const RollPanel = (props: RollPanelProps) => {

  return (
    <div className="panel">
      <dt>{props.title}</dt>
      <dd>{props.value}</dd>
    </div>
  );
};

export default RollPanel;
