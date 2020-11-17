import React, { useEffect, useState } from "react";
import Project from "./Project";
import ProjectCounter from "./ProjectCounter";
import { getWork } from "./api";
import { useSelector } from "react-redux";
import ScrollDetector from "../_core/ScrollDetector";
import { getNextProject } from "./api";
import Header from "../_core/Header";
import { useDrag } from "react-use-gesture";
import { useSpring, animated as a }from "react-spring";



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
      setAnim((i:any) => {
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
      setAnim(() => {
        let newCurrentItem = currentItem + scrollDetector.dir;
        const maxIndex = work.length - 1; 

        //check if to small
        if (newCurrentItem < 0) {
          newCurrentItem = maxIndex;
        }

        //check if to big
        if (newCurrentItem > maxIndex) {
          newCurrentItem = 0;
        }

        const x = -newCurrentItem * window.innerWidth;
        return { x: `translateX(${x}px)` };
      });
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

  const [anim, setAnim] = useSpring(() => ({
    x: `translateX(-${(currentItem) * window.innerWidth}px)`,
  }));

  const bind = useDrag(({down, movement: [mx], direction: [xDir], distance, cancel}:any) => {
    if (down && distance > window.innerWidth / 2) {
      cancel(getNextProject(xDir));
    }

    //@ts-ignore
    setAnim(() => {
      const x = currentItem * window.innerWidth + (down ? mx : 0)
      return { x: `translateX(${x}px)` };
    });
  });

  const updateCounter = (dir:number) => {
    getNextProject(dir)
    //@ts-ignore
    setAnim(() => {
      let newCurrentItem = currentItem + dir;
      const maxIndex = work.length - 1; 

      //check if to small
      if (newCurrentItem < 0) {
        newCurrentItem = maxIndex;
      }

      //check if to big
      if (newCurrentItem > maxIndex) {
        newCurrentItem = 0;
      }

      const x = -newCurrentItem * window.innerWidth;
      return { x: `translateX(${x}px)` };
    });
  };

  return (
    <section className="workSection">
      <Header title="Tim D'hoore - work" url="https://www.timdhoore.com/work"/>
      <div className="wrapper">
        <header className="hide">
          <h2>Work</h2>
        </header>
        <a.div className="projectSlider" style={{transform: anim.x}} {...bind()}>
          {
            work.map((data:any) => (
                <Project
                  data={data}
                  counter={setCounter()}
                  isActive={
                    ""
                  }
                  key={`workItem${data.title}`}
                  //pos={{x}}
                />
            ))
          }
        </a.div> 
        <ProjectCounter counter={setCounter()} updateCounter={updateCounter} hasButtons/>
        <ProjectCounter counter={setCounter()} />
      </div>
    </section>
  );
};

export default Work;
/*i > currentItem
                      ? "rightProject"
                      : i < currentItem
                      ? "leftProject"
                      : ""*/