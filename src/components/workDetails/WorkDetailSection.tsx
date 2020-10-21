import React from "react";
import { workDetailSectionProps } from "./types";

const WorkDetailSection = (props: workDetailSectionProps) => {

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
      <div className="imageHolder">
        <img src={props.image} alt={props.title} />
      </div>
    </section>
  );
};

export default WorkDetailSection;
