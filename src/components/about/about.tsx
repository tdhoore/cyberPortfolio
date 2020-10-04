import React from "react";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <article className="aboutArticle">
      <div className="wrapper">
        <motion.div className="titleAndInfo panel" {...panelAnim}>
          <header>
            <h2>
              Hi, I'm
              <br />
              Tim D'hoore
            </h2>
            <p>sub title</p>
          </header>
          <p className="aboutInfo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur labore inventore ex quas aliquam nesciunt saepe in
            numquam cupiditate vel, aliquid suscipit error itaque culpa quo.
            Vitae est perferendis tempore.
          </p>
          <Link to="/contact" className="defaultButton">
            Let's have a chat
          </Link>
        </motion.div>
        <motion.div
          className="imageHolder panel"
          {...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.4 }}
        >
          <img src="https://via.placeholder.com/236x353" alt="" />
          <motion.div
            className="decoPanel aboutDeco2"
            {...panelAnim}
            transition={{ ...panelAnim.transition, delay: 0.5 }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="panel aboutDeco1"
          {...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.6 }}
        ></motion.div>
        <div className="accentBarAfter"></div>
      </div>
    </article>
  );
};

export default About;
