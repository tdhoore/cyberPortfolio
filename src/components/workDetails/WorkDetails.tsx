import React, { useState, useEffect } from "react";
import { props } from "./types";
import { getWork } from "../work/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <div className="projectPage">
          <div className="project accentBarAfter">
            <div className="projectTitle panel">
              <header>
                <h2>
                  <span>{currentProject.title}</span>
                </h2>
                <p>Sub title</p>
                <div
                  className={`panel categoryDeco categoryDeco${currentProject.roll}`}
                ></div>
              </header>
            </div>
            <div className="projectImage">
              <div className="image">
                <img src={currentProject.image} alt={currentProject.title} />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="rollAndInfo">
            <section className="workDetailSection">
              <header className="hide">
                <h4>client and roll</h4>
              </header>
              <dl className="rollInformation accentBarAfter">
                <div className="panel">
                  <dt>Roll</dt>
                  <dd>{currentProject.roll}</dd>
                </div>
                <div className="panel">
                  <dt>Client</dt>
                  <dd>{currentProject.client}</dd>
                </div>
                <div className="panel">
                  <dt>Created</dt>
                  <dd>{currentProject.client}</dd>
                </div>
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

          {currentProject.sliderimages.map((item: any, index: number) => {
            return !item.description ? (
              <section
                className="workDetailSection screenshotSection"
                key={item.title + index}
              >
                <header className="hide">
                  <h3>screenshot - {item.title}</h3>
                </header>
                <div className="imageHolder" key={`screenshot${index}`}>
                  <img src={item.image} alt={item.title} />
                </div>
              </section>
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
      </article>
      <div className="wrapper">
        <article className="workDetailNextMove ">
          <header className="panel">
            <h3>What's next?</h3>
          </header>
          <div className="accentBarAfter contactLinkBar">
            <section className="contactLink panel">
              <header>
                <h4>Want to chat?</h4>
              </header>
              <Link to="/contact" className="defaultButton">
                Let's talk
              </Link>
            </section>
          </div>
          <p className="OR pixFont">OR</p>
          <div className="accentBarAfter nextProjectBar">
            <section className="panel">
              <header>
                <h4>Next project</h4>
              </header>
              <Link to="/work" className="nextProject">
                <article>
                  <div className="projectTitle panel">
                    <header>
                      <h5>Title</h5>
                      <p>lorem</p>
                    </header>
                    <div className="defaultButtonHolder">
                      <button className="defaultButton">See more</button>
                    </div>
                  </div>
                  <div className="imageHolder">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                    />
                  </div>
                </article>
              </Link>
            </section>
          </div>
        </article>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default WorkDetails;
