import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./types";

const Project = (props: ProjectProps) => {
  return props.data !== undefined ? (
    <div className={`projectPage ${props.isActive}`}>
      <Link to={`/work/${props.data.title}`} className="projectLink">
        <article className={`project panel `}>
          <div className="projectTitle borderBox">
            <header>
              <h3>
                <span>{props.data.title}</span>
              </h3>
              <p>Sub title</p>
            </header>
            <div className="defaultButtonHolder">
              <button className="defaultButton">See more</button>
            </div>
          </div>
          <div className="projectImage">
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
