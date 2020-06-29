import React from "react";
import { props } from "./types";
import ProjectDetailCounter from "./ProjectDetailCounter";

const WorkDetails = (props: props) => {
  return (
    <article className="workDetailArticle">
      <header>
        <h2>title</h2>
      </header>
      <div className="workDetailContentHolder">
        <div className="workDetailContent">
          <section className="projectInfoSection">
            <header>
              <h3>Project info</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                maiores aliquam quam voluptate sapiente mollitia corrupti quas
                aut tempora nesciunt? Qui ullam voluptatem molestias alias
                officiis sit pariatur culpa animi.
              </p>
            </header>
            <img src="https://via.placeholder.com/236x438" alt="" />
            <section className="rollInformationSection">
              <header className="hide">
                <h4>client and roll</h4>
              </header>
              <dl className="rollInformation">
                <div>
                  <dt>Roll</dt>
                  <dd>roll</dd>
                </div>
                <div>
                  <dt>Client</dt>
                  <dd>Awsome corp</dd>
                </div>
              </dl>
            </section>
          </section>
          <section className="screenshotSection">
            <header>
              <h3>screenshot</h3>
            </header>
            <img src="" alt="" />
          </section>
        </div>
      </div>
      <ProjectDetailCounter />
    </article>
  );
};

export default WorkDetails;
