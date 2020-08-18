import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./types";

const Project = (props: ProjectProps) => {
  return props.data !== undefined ? (
    <div className={`projectPage ${props.isActive}`}>
      <Link to={`/work/${props.data.title}`} className="projectLink">
        <article className="project accentBarAfter">
          <div className="projectTitle panel">
            <header>
              <h3>
                <span>{props.data.title}</span>
              </h3>
              <p>Sub title</p>
              <div
                className={`panel categoryDeco categoryDeco${props.data.title}`}
              ></div>
            </header>
            <div className="defaultButtonHolder">
              <button className="defaultButton">See more</button>
            </div>
          </div>
          <div className="projectImage panel">
            <div className="image">
              <img src={props.data.image} alt={props.data.title} />
            </div>
          </div>
        </article>
      </Link>
    </div>
  ) : (
    <div></div>
  );
};

export default Project;
