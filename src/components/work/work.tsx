import React, { useEffect, useState, useRef } from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { getWork } from "./api";
import { useSelector } from "react-redux";
import ScrollDetector from "../_core/ScrollDetector";
import { getNextProject } from "./api";
import Header from "../_core/Header";
import { useDrag } from "react-use-gesture";
import { useSprings, animated as a }from "react-spring";

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
      //@ts-ignore
      set((i:any) => {
        const x = (i - currentItem) * window.innerWidth
        return { x: `translateX(${x}px)` };
      });
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

      //@ts-ignore
      /*set((i:any) => {
        const x = (i - currentItem) * window.innerWidth
        return { x: `translateX(${x}px)` };
      });*/
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

  const [props, set] = useSprings(work.length, i => ({
    x: `translateX(${i * window.innerWidth}px)`,
  }));

  const bind = useDrag(({down, movement: [mx], direction: [xDir], distance, cancel}:any) => {
    if (down && distance > window.innerWidth / 2) {
      cancel(getNextProject(xDir));
    }

    //@ts-ignore
    set((i:any) => {
      const x = (i - currentItem) * window.innerWidth + (down ? mx : 0)
      return { x: `translateX(${x}px)` };
    });
  });

  return (
    <section className="workSection">
      <Header title="Tim D'hoore - work" url="https://www.timdhoore.com/work"/>
      <div className="wrapper">
        <header className="hide">
          <h2>Work</h2>
        </header>
        <div className="projectSlider">
          {
            props.map(({ x }, i) => (
              <a.div className="projectAnimHolder" {...bind()} key={i} style={{ transform: x }}>
                <Project
                  data={work[i]}
                  counter={setCounter()}
                  isActive={
                    i > currentItem
                      ? "rightProject"
                      : i < currentItem
                      ? "leftProject"
                      : ""
                  }
                  pos={{x}}
                />
              </a.div>
            ))
          }
        </div> 
        <ProjectCounter counter={setCounter()} hasButtons/>
        <ProjectCounter counter={setCounter()} />
      </div>
    </section>
  );
};

export default Work;
