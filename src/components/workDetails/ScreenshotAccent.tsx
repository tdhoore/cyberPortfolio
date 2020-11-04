import React from "react";
import { screenshotAccentProps } from "./types";
import { genImageName } from "../_core/functions";

const ScreenshotAccent = (props: screenshotAccentProps) => {
  const baseName = genImageName(props.image);
  const fullWidths = [380, 580, 1600];
  const halfWidths = [380, 580, 876];

  const getImage = (isWebp:boolean) => {
    const srces = {
      srcSet: "",
      src: ""
    };
    let ext = baseName.extention;
    let usedWidths = halfWidths;

    if(isWebp) {
      ext = ".webp";
    }

    if(props.isFullWidth !== undefined) {
      if(props.isFullWidth) {
        usedWidths = fullWidths;
      }
    }

    usedWidths.forEach((width:number) =>{
      srces.srcSet += `/assets/img/${baseName.baseName}_${width}${ext} ${width}w, `; 
    });

    srces.src = `/assets/img/${baseName.baseName}_${usedWidths[0]}${ext} ${usedWidths[0]}w`; 

    return srces;
  }

  

  return (
    <div className={`screenshotSectionaccent accentBarAfter ${props.isFullWidth !== undefined ? "fullWidth" : ""}`}>
      <section className="workDetailSection screenshotSection">
        <header className="hide">
          <h3>screenshot - {props.title}</h3>
        </header>
        <div className="imageHolder " key={`screenshot${props.index}`}>
          <picture>
            <source srcSet={getImage(true).srcSet}
                    src={getImage(true).src}
                    type="image/webp"
            />
            <img 
              srcSet={getImage(false).srcSet}
              src={getImage(false).src}
              alt={props.title}/>
          </picture>
        </div>
      </section>
    </div>
  );
};

export default ScreenshotAccent;
