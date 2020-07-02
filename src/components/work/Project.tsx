import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./types";

const Project = (props: ProjectProps) => {
  return (
    <article className="project">
      <div className="projectTitle">
        <header>
          <h3>Lorem ipsum</h3>
        </header>
        <Link to="" className="defaultButton">
          Show me more
        </Link>
        <div className="pixFont counter blurEffectText">*___</div>
        <div className="pixFont counter blurEffectText">*___</div>
      </div>
      <div className="projectImage">
        <div className="image">
          <img src="https://via.placeholder.com/236x438" alt="" />
        </div>
        <div className="pixFont blurEffectText decoNumbers">
          <div>541</div>
          <div>541</div>
          <div>541</div>
          <div>541</div>
        </div>
      </div>
    </article>
  );
};

export default Project;
