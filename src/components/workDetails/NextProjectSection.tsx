import React from "react";
import { nextProjectSectionProps } from "./types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const NextProjectSection = (props: nextProjectSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  console.log(props.lastIndex);
  return (
    <section className="nextProjectSection">
      <header className="panel nextProjectPanel">
        <h4>Next project</h4>
      </header>
      <Link to="/work" className="nextProject">
        <article className="projectPage">
          <div className="project accentBarAfter">
            <header className="projectTitle panel">
              <h5>
                <span>{"title"}</span>
              </h5>
              <p>Sub title</p>
              <div
                className={`panel categoryDeco categoryDeco${"rollId"}`}
              ></div>
              <div className="defaultButtonHolder">
                <button className="defaultButton">See more</button>
              </div>
            </header>
            <div className="projectImage">
              <div className="image">
                <img src={"img"} alt={"title"} />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default NextProjectSection;
