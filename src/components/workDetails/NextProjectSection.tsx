import React from "react";
import { nextProjectSectionProps } from "./types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const NextProjectSection = (props: nextProjectSectionProps) => {
  const createLink = (title:string) => `/work/${title.replace(" ", "").toLowerCase()}`; 

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section className="nextProjectSection">
      <header className="panel nextProjectPanel">
        <h4>Next project</h4>
      </header>
      <Link to={createLink(props.nextProject.title)} className="nextProject">
        <article className="projectPage">
          <div className="project accentBarAfter">
            <header className="projectTitle panel">
              <h5>
                <span>{props.nextProject.title}</span>
              </h5>
              <p>{props.nextProject.categorie}</p>
              <div
                className={`panel categoryDeco categoryDeco${props.nextProject.roll}`}
              ></div>
              <div className="defaultButtonHolder">
                <button className="defaultButton">See more</button>
              </div>
            </header>
            <div className="projectImage">
              <div className="image">
                <img src={props.nextProject.image} alt={props.nextProject.title} />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default NextProjectSection;
