import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./types";

const Project = (props: ProjectProps) => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return props.data !== undefined ? (
    <article className="project">
      <div className="projectTitle">
        <header>
          <h3>{props.data.title}</h3>
        </header>
        <Link to={`/work/${props.data.title}`} className="defaultButton">
          Show me more
        </Link>
        <div className="pixFont counter blurEffectText">{props.counter}</div>
        <div className="pixFont counter blurEffectText">{props.counter}</div>
      </div>
      <div className="projectImage">
        <div className="image">
          <img src={props.data.image} alt={props.data.title} />
        </div>
        <div className="pixFont blurEffectText decoNumbers">
          <div>541</div>
          <div>680</div>
          <div>943</div>
          <div>274</div>
        </div>
      </div>
    </article>
  ) : (
    <div></div>
  );
};

export default Project;
