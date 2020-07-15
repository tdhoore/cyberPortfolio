import React, { useEffect } from "react";
import { props } from "./types";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import ScrollDetector from "../_core/ScrollDetector";
import { gotToWork } from "./api";
import { motion } from "framer-motion";
import { fadeInFlicker } from "../anim/animationPresets";

const Home = (props: props) => {
  useEffect(() => {
    //setup scroll support
    const scrollDetector = new ScrollDetector();

    const handleScroll = (e: Event) => {
      if (scrollDetector.dir > 0) {
        gotToWork();
      }
    };

    //listen for updates
    window.addEventListener("updateScroll", handleScroll);

    return () => {
      scrollDetector.remove();
      window.removeEventListener("updateScroll", handleScroll);
    };
  });

  return (
    <motion.article className="homeArticle">
      <div className="wrapper">
        <div className="content">
          <div className="intro">
            <header>
              <motion.h2 {...fadeInFlicker}>
                <span>Tim D'hoore</span>
              </motion.h2>
              <motion.p
                {...fadeInFlicker}
                transition={{ ...fadeInFlicker.transition, delay: 0.4 }}
              >
                Creative frontend developer
              </motion.p>
            </header>
          </div>
          <img src={logo} alt="Tim D'hoore logo" />
          <motion.div
            className="scrollNextPage"
            {...fadeInFlicker}
            transition={{ ...fadeInFlicker.transition, delay: 0.6 }}
          >
            <Link to="/work" className="diamondButton">
              Scroll for more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default Home;
