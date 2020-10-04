import React, { useEffect } from "react";
import { props } from "./types";
import { getWork } from "../work/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";

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
                <motion.div
                  className="panel"
                  {...panelAnim}
                  transition={{ ...panelAnim.transition, delay: 0.4 }}
                >
                  <dt>Roll</dt>
                  <dd>{currentProject.roll}</dd>
                </motion.div>
                <motion.div
                  className="panel"
                  {...panelAnim}
                  transition={{ ...panelAnim.transition, delay: 0.5 }}
                >
                  <dt>Client</dt>
                  <dd>{currentProject.client}</dd>
                </motion.div>
                <motion.div
                  className="panel"
                  {...panelAnim}
                  transition={{ ...panelAnim.transition, delay: 0.6 }}
                >
                  <dt>Created</dt>
                  <dd>{currentProject.client}</dd>
                </motion.div>
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
                <div className="screenshotSectionaccent accentBarAfter">
                  <section
                    className="workDetailSection screenshotSection panel"
                    key={item.title + index}
                  >
                    <header className="hide">
                      <h3>screenshot - {item.title}</h3>
                    </header>
                    <div className="imageHolder " key={`screenshot${index}`}>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </section>
                </div>
              ) : (
                <section
                  className="workDetailSection projectInfoImage"
                  key={item.title + index}
                >
                  <div className="accentBarAfter">
                    <div className="info">
                      <header>
                        <h3>{item.title}</h3>
                      </header>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="imageHolder panel">
                    <img src={item.image} alt={item.title} />
                  </div>
                </section>
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
            <section className="contactLink panel">
              <header>
                <h4>Want to chat?</h4>
              </header>
              <Link to="/contact" className="defaultButton">
                Let's talk
              </Link>
            </section>
            <div className="orWrapper pixFont">
              <p className="panel OR pixFont">OR</p>
            </div>
          </div>
          <section className="nextProjectSection">
            <header className="panel nextProjectPanel">
              <h4>Next project</h4>
            </header>
            <Link to="/work" className="nextProject">
              <article className="projectPage">
                <div className="project accentBarAfter">
                  <header className="projectTitle panel">
                    <h5>
                      <span>{currentProject.title}</span>
                    </h5>
                    <p>Sub title</p>
                    <div
                      className={`panel categoryDeco categoryDeco${currentProject.roll}`}
                    ></div>
                    <div className="defaultButtonHolder">
                      <button className="defaultButton">See more</button>
                    </div>
                  </header>
                  <div className="projectImage">
                    <div className="image">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        </article>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default WorkDetails;
