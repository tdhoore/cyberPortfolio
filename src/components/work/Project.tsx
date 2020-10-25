import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";

const Project = (props: ProjectProps) => {
  const createLink = (title:string) => `/work/${title.replace(" ", "").toLowerCase()}`; 

  return props.data !== undefined ? (
    <div className={`projectPage ${props.isActive}`}>
      <Link to={createLink(props.data.title)} className="projectLink">
        <article className="project accentBarAfter">
          <motion.div
            className="projectTitle panel"
            {...panelAnim}
            transition={{ ...panelAnim.transition, delay: 0.4 }}
          >
            <header>
              <h3>
                <span>{props.data.title}</span>
              </h3>
              <p>{props.data.categorie}</p>
              <motion.div
                className={`panel categoryDeco categoryDeco${props.data.title}`}
                {...panelAnim}
                transition={{ ...panelAnim.transition, delay: 0.5 }}
              ></motion.div>
            </header>
            <div className="defaultButtonHolder">
              <button className="defaultButton">See more</button>
            </div>
          </motion.div>
          <motion.div className="projectImage panel" {...panelAnim}>
            <div className="image">
              <picture>
                  <source srcSet={`/assets/img/${props.data.image}_mobile.webp 580w, 
                    /assets/img/${props.data.image}_desktop.webp 1600w`}
                    src={`/assets/img/${props.data.image}_mobile.webp`}/>
                  <img 
                    srcSet={`/assets/img/${props.data.image}_mobile.jpg 580w, 
                    /assets/img/${props.data.image}_desktop.jpg 1600w`}
                    src={`/assets/img/${props.data.image}_mobile.jpg`}
                    alt={props.data.title}/>
                </picture>
            </div>
          </motion.div>
        </article>
      </Link>
    </div>
  ) : (
    <div></div>
  );
};

export default Project;
