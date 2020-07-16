import React, { useEffect } from "react";
import { props } from "./types";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import ScrollDetector from "../_core/ScrollDetector";
import { gotToWork } from "./api";
import { motion } from "framer-motion";
import { fadeInFlicker, fadeInFlickerScale } from "../anim/animationPresets";
import DecoNumbers from "../_core/DecoNumbers";

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
    <article className="homeArticle">
      <div className="wrapper">
        <div className="contentAndDeco">
          <DecoNumbers />
          <div className="content">
            <div className="intro">
              <header>
                <motion.h2
                  {...fadeInFlickerScale}
                  transition={{ ...fadeInFlickerScale.transition, delay: 0.5 }}
                >
                  <span>Tim D'hoore</span>
                </motion.h2>
                <motion.p
                  {...fadeInFlickerScale}
                  transition={{ ...fadeInFlickerScale.transition, delay: 0.6 }}
                >
                  Creative frontend developer
                </motion.p>
              </header>
            </div>
            <motion.img
              src={logo}
              alt="Tim D'hoore logo"
              {...fadeInFlickerScale}
            />
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
          <DecoNumbers />
        </div>
      </div>
    </article>
  );
};

export default Home;
