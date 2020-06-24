import React from "react";
import { Link } from "react-router-dom";

const ProjectCounter = (props: any) => {
  return (
    <div className="projectCounter">
      <Link to="" className="diamondButton"></Link>
      <div className="pixFont counter blurEffectText">*___</div>
      <Link to="" className="diamondButton"></Link>
    </div>
  );
};

export default ProjectCounter;
