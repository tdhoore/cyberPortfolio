import React, { useEffect, useState } from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { getWork } from "./api";
import { useSelector } from "react-redux";
import ScrollDetector from "../_core/ScrollDetector";
import { getNextProject } from "./api";
import { motion } from "framer-motion";
import Header from "../_core/Header";

const Work = () => {
  const work = useSelector((state: any) => state.workReducer.workItems);
  const currentItem = useSelector(
    (state: any) => state.workReducer.currentItem
  );
  const lengthWorkArray = useSelector(
    (state: any) => state.workReducer.workItems.length
  );

  const [currentPageWidth, setCurrentPageWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    if (currentPageWidth !== window.innerWidth) {
      setCurrentPageWidth(window.innerWidth);
    }
  };

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

    //listen for window resize
    window.addEventListener("resize", handleWindowResize);

    return () => {
      scrollDetector.remove();
      window.removeEventListener("updateScroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
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
      <Header title="Tim D'hoore - work" url="https://www.timdhoore.com/work"/>
      <div className="wrapper">
        <header className="hide">
          <h2>Work</h2>
        </header>
        <motion.div
          className="projectSlider"
          animate={{
            x: -currentPageWidth * currentItem,
          }}
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

            if (swipe <= -swipeConfidenceThreshold) {
              getNextProject(1);
            } else if (swipe >= swipeConfidenceThreshold) {
              getNextProject(-1);
            }
          }}
        >
          {work.map((data: any, index: number) => {
            return (
              <Project
                key={`workProject${index}`}
                data={data}
                counter={setCounter()}
                isActive={
                  index > currentItem
                    ? "rightProject"
                    : index < currentItem
                    ? "leftProject"
                    : ""
                }
              />
            );
          })}
        </motion.div>
        <ProjectCounter counter={setCounter()} hasButtons/>
        <ProjectCounter counter={setCounter()} />
      </div>
    </section>
  );
};

export default Work;
