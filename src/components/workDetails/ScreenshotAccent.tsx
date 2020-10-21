import React from "react";
import { screenshotAccentProps } from "./types";

const ScreenshotAccent = (props: screenshotAccentProps) => {

  return (
    <div className="screenshotSectionaccent accentBarAfter">
      <section className="workDetailSection screenshotSection">
        <header className="hide">
          <h3>screenshot - {props.title}</h3>
        </header>
        <div className="imageHolder " key={`screenshot${props.index}`}>
          <img src={props.image} alt={props.title} />
        </div>
      </section>
    </div>
  );
};

export default ScreenshotAccent;
