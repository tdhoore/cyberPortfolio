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
            <p>creative developer</p>
          </header>
          <p className="aboutInfo">
          I’m a <strong>front-end developer</strong> with a passion for new web technologies. All in the name of making beautiful websites that amazes and interacts with users. Which I like to do with a combination of <strong>3d elements</strong>, <strong>animation</strong> and <strong>handcrafted images</strong>. 
          <br/>
          <br/>
          The internet is a beautiful place and I would like to help you stand out as the majestic unicorn you are. If you’re interested in hiring me for a small <strong>part time freelance job</strong>, then just click the button below and let's have a chat.
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
          ><div></div></motion.div>
        </motion.div>
        <motion.div
          className="panel aboutDeco1"
          {...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.6 }}
        ><div></div></motion.div>
        <div className="accentBarAfter"></div>
      </div>
    </article>
  );
};

export default About;
