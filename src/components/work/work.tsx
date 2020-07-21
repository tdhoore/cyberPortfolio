import React, { useEffect } from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { props } from "./types";
import { getWork } from "./api";
import { useSelector } from "react-redux";
import ScrollDetector from "../_core/ScrollDetector";
import { getNextProject } from "./api";
import { AnimatePresence, motion } from "framer-motion";

const Work = (props: props) => {
  const work = useSelector((state: any) => state.workReducer.workItems);
  const currentItem = useSelector(
    (state: any) => state.workReducer.currentItem
  );
  const lengthWorkArray = useSelector(
    (state: any) => state.workReducer.workItems.length
  );

  useEffect(() => {
    //if there is no work here get it
    if (work.length === 0) {
      getWork();
    }

    //setup scroll support
    const scrollDetector = new ScrollDetector();

    const handleScroll = (e: Event) => {
      getNextProject(scrollDetector.dir);
    };

    //listen for updates
    window.addEventListener("updateScroll", handleScroll);

    return () => {
      scrollDetector.remove();
      window.removeEventListener("updateScroll", handleScroll);
    };
  });

  const setCounter = () => {
    let counter = "";

    for (let i = 0; i < lengthWorkArray; i++) {
      if (i === currentItem) {
        counter += "*";
      } else {
        counter += "_";
      }
    }

    return counter;
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const swipeConfidenceThreshold = 0;

  return (
    <section className="workSection">
      <div className="wrapper">
        <header className="hide">
          <h2>Work</h2>
        </header>
        <motion.div
          className="projectSlider"
          initial={{ x: -(window.innerWidth - 24) * (currentItem - 1) }}
          animate={{ x: -(window.innerWidth - 24) * currentItem }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
          }}
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={1}
          drag="x"
          dragMomentum={false}
          dragTransition={{ bounceDamping: 10000, bounceStiffness: 0 }}
          onDragEnd={(event, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              getNextProject(1);
            } else if (swipe > swipeConfidenceThreshold) {
              getNextProject(-1);
            }
          }}
        >
          <Project data={work[0]} counter={setCounter()} />
          <Project
            data={work[1]}
            counter={setCounter()}
            closedClass="closedProject"
          />
        </motion.div>
        <ProjectCounter counter={setCounter()} />
        <ProjectCounter counter={setCounter()} />
      </div>
    </section>
  );
};

export default Work;
