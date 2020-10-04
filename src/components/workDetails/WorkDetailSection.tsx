import React from "react";
import { workDetailSectionProps } from "./types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkDetailSection = (props: workDetailSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section
      className="workDetailSection projectInfoImage"
      key={props.title + props.index}
    >
      <div className="accentBarAfter">
        <div className="info">
          <header>
            <h3>{props.title}</h3>
          </header>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="imageHolder panel">
        <img src={props.image} alt={props.title} />
      </div>
    </section>
  );
};

export default WorkDetailSection;
