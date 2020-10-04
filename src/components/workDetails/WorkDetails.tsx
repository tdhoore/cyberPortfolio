import React, { useEffect } from "react";
import { props } from "./types";
import { getWork } from "../work/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import RollPanel from "./RollPanel";
import ScreenshotAccent from "./ScreenshotAccent";
import WorkDetailSection from "./WorkDetailSection";
import ContactLink from "./ContactLink";
import NextProjectSection from "./NextProjectSection";

const WorkDetails = (props: props) => {
  const work = useSelector((state: any) => state.workReducer.workItems);

  //get current project
  let currentProject: any = undefined;

  work.forEach((item: any) => {
    if (props.title === item.title) {
      currentProject = item;
    }
  });

  useEffect(() => {
    //if there is no work here get it
    if (work.length === 0) {
      getWork();
    }
  });

  return currentProject ? (
    <div className="workDetail">
      <article className="workDetailArticle">
        <header className="projectPage">
          <div className="project accentBarAfter">
            <div className="projectTitle">
              <motion.div className="panel" {...panelAnim}>
                <div>
                  <h2>
                    <span>{currentProject.title}</span>
                  </h2>
                  <p>Sub title</p>
                  <div
                    className={`categoryDeco categoryDeco${currentProject.roll}`}
                  >
                    <motion.div
                      className="panel"
                      {...panelAnim}
                      transition={{ ...panelAnim.transition, delay: 0.4 }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="projectImage">
              <div className="image">
                <img src={currentProject.image} alt={currentProject.title} />
              </div>
            </div>
          </div>
        </header>
        <div className="wrapper">
          <div className="rollAndInfo">
            <section className="workDetailSection">
              <header className="hide">
                <h4>client and roll</h4>
              </header>
              <dl className="rollInformation accentBarAfter">
                <RollPanel title="roll" value={currentProject.roll} />
                <RollPanel title="Client" value={currentProject.client} />
                <RollPanel title="Created" value={currentProject.created} />
              </dl>
            </section>
            <section className="workDetailSection projectInfo">
              <header>
                <h3>Project info</h3>
              </header>
              <p>{currentProject.projectInfo}</p>
              <a href="#" target="_blank" className="linkButton">
                <span>test</span>
              </a>
            </section>
          </div>
          <div className="screenshotMain">
            {currentProject.sliderimages.map((item: any, index: number) => {
              return !item.description ? (
                <ScreenshotAccent
                  title={item.title}
                  image={item.image}
                  index={index}
                  key={item.title + index}
                />
              ) : (
                <WorkDetailSection
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  index={index}
                  key={item.title + index}
                />
              );
            })}
          </div>
        </div>
      </article>
      <div className="wrapper">
        <article className="workDetailNextMove accentBarAfter">
          <header className="panel nextTitle">
            <h3>
              Wasn’t that nice?
              <br /> What do you want to do next? What's next?
            </h3>
          </header>
          <div className="contactLinkAndOr">
            <ContactLink />
            <div className="orWrapper pixFont">
              <p className="panel OR pixFont">OR</p>
            </div>
          </div>
          <NextProjectSection lastIndex={0} />
        </article>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default WorkDetails;
