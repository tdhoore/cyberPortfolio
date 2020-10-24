import React from "react";
import { workDetailSectionProps } from "./types";
import { genImageName } from "../_core/functions";

const WorkDetailSection = (props: workDetailSectionProps) => {
  const baseName = genImageName(props.image);
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
          <p dangerouslySetInnerHTML={{__html: props.description}}></p>
        </div>
      </div>
      <div className="imageHolder">
      <picture>
        <source srcSet={`/assets/img/${baseName.baseName}_380.webp 380w, 
                  /assets/img/${baseName.baseName}_580.webp 580w, 
                  /assets/img/${baseName.baseName}_1600.webp 1600w`}
                src={`/assets/img/${baseName.baseName}_380.webp`}/>
        <img 
          srcSet={`/assets/img/${baseName.baseName}_380${baseName.extention} 380w, 
                  /assets/img/${baseName.baseName}_580${baseName.extention} 580w, 
                  /assets/img/${baseName.baseName}_1600${baseName.extention} 1600w`}
          src={`/assets/img/${baseName.baseName}_380${baseName.extention}`}
          alt={props.title}/>
      </picture>
      </div>
    </section>
  );
};

export default WorkDetailSection;
/* <img src={`/assets/img/${props.image}`} alt={props.title} />*/