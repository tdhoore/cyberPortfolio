import React from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import Header from "../_core/Header";

const Home = () => {
  return (
    <article className="homeArticle">
      <Header title="Tim D'hoore - home" url="https://www.timdhoore.com/"/>
      <div className="wrapper">
        <div className="accentBarAfter">
          <motion.div className="intro panel" {...panelAnim}>
            <header>
              <h2>
                <span>Tim D'hoore</span>
              </h2>
              <p>Creative developer</p>
            </header>
            <p className="shortInfo">
            Let’s create something digital together, that really tells how awesome you are.
            </p>
            <div className="scrollNextPage">
              <Link to="/work" className="defaultButton">
                Start exploring
              </Link>
            </div>
          </motion.div>
          <div className="homeDeco1">
            <motion.div
              className="decoPanel"
              {...panelAnim}
              transition={{ ...panelAnim.transition, delay: 0.55 }}
            >
              <div></div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="panel skills pixFont"
          {...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.5 }}
        >
          <div className="carroucel">
            <div
              className="carroucelContent"
              data-loop="Development - Design - Motion - "
            >
              <ul>
                <li>Development</li>
                <li>Design</li>
                <li>Motion</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="panel logo"
          {...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.4 }}
        >
          <img src={logo} alt="Tim D'hoore logo" />
        </motion.div>
      </div>
    </article>
  );
};

export default Home;
