import React from "react";
import { nextProjectSectionProps } from "./types";
import { Link } from "react-router-dom";

const NextProjectSection = (props: nextProjectSectionProps) => {
  const createLink = (url:string) => `/work/${url}`; 

  return (
    <section className="nextProjectSection">
      <header className="panel nextProjectPanel">
        <h4>Next project</h4>
      </header>
      <Link to={createLink(props.nextProject.url)} className="nextProject">
        <article className="projectPage">
          <div className="project accentBarAfter">
            <header className="projectTitle panel">
              <h5>
                <span>{props.nextProject.title}</span>
              </h5>
              <p>{props.nextProject.categorie}</p>
              <div
                className={`panel categoryDeco categoryDeco${props.nextProject.categorie}`}
              >
                <div></div>
              </div>
              <div className="defaultButtonHolder">
                <button className="defaultButton">See more</button>
              </div>
            </header>
            <div className="projectImage">
              <div className="image">
                <picture>
                  <source srcSet={`/assets/img/${props.nextProject.image}_mobile.webp 580w, 
                    /assets/img/${props.nextProject.image}_desktop.webp 1600w`}
                    src={`/assets/img/${props.nextProject.image}_mobile.webp`}/>
                  <img 
                    srcSet={`/assets/img/${props.nextProject.image}_mobile.jpg 580w, 
                    /assets/img/${props.nextProject.image}_desktop.jpg 1600w`}
                    src={`/assets/img/${props.nextProject.image}_mobile.jpg`}
                    alt={props.nextProject.title}/>
                </picture>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default NextProjectSection;
