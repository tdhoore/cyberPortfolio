import React from "react";
import { screenshotAccentProps } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { useInView } from "react-intersection-observer";

const ScreenshotAccent = (props: screenshotAccentProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    view: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
    },
    start: {
      y: 50,
      x: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="screenshotSectionaccent accentBarAfter"
      ref={ref}
      {...panelAnim}
      animate={inView ? "view" : "start"}
      variants={variants}
      transition={{
        duration: 0.3,
        stiffness: 700,
        damping: 60,
      }}
    >
      <section className="workDetailSection screenshotSection">
        <header className="hide">
          <h3>screenshot - {props.title}</h3>
        </header>
        <div className="imageHolder " key={`screenshot${props.index}`}>
          <img src={props.image} alt={props.title} />
        </div>
      </section>
    </motion.div>
  );
};

export default ScreenshotAccent;
