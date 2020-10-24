import React from "react";
import { RollPanelProps } from "./types";

const RollPanel = (props: RollPanelProps) => {

  return (
    <div className="panel">
      <dt>{props.title}</dt>
      <dd>{props.value}</dd>
    </div>
  );
};

export default RollPanel;
