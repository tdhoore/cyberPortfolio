import React from "react";
import { Link } from "react-router-dom";

const ProjectDetailCounter = (props: any) => {
  //gebruik push url
  return (
    <div className="projectDetailCounter">
      <Link to="" className="diamondButton"></Link>
      <div className="pixFont counter blurEffectText">*___</div>
      <Link to="" className="diamondButton"></Link>
    </div>
  );
};

export default ProjectDetailCounter;
