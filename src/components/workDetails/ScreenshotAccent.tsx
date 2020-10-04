import React from "react";
import { screenshotAccentProps } from "./types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScreenshotAccent = (props: screenshotAccentProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div className="screenshotSectionaccent accentBarAfter">
      <section className="workDetailSection screenshotSection panel">
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
