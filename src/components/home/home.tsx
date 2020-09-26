import React, { useEffect } from "react";
import { props } from "./types";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import ScrollDetector from "../_core/ScrollDetector";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";

const Home = (props: props) => {
  const history = useHistory();

  useEffect(() => {
    //setup scroll support
    const scrollDetector = new ScrollDetector();

    const handleScroll = (e: Event) => {
      if (scrollDetector.dir > 0) {
        history.push("/work");
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
        <div className="accentBarAfter">
          <div className="intro panel">
            <header>
              <h2>
                <span>Tim D'hoore</span>
              </h2>
              <p>Creative developer</p>
            </header>
            <p className="shortInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. quos
              quibusdam quo?
            </p>
            <div className="scrollNextPage">
              <Link to="/work" className="defaultButton">
                Scroll for more
              </Link>
            </div>
          </div>
          <motion.div
            className="decoPanel homeDeco1"
            {...panelAnim}
            transition={{ ...panelAnim.transition, delay: 0.4 }}
          >
            <div></div>
          </motion.div>
        </div>
        <div className="panel skills pixFont">
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
        </div>
        <div className="panel logo">
          <img src={logo} alt="Tim D'hoore logo" />
        </div>
      </div>
    </article>
  );
};

export default Home;
/*  <motion.div
            className="decoPanel homeDeco1"
            {...panelAnim}
            transition={{ ...panelAnim.transition, delay: 0.4 }}
          ></motion.div>
          <motion.div
            className="decoPanel homeDeco2"
            {...panelAnim}
            transition={{ ...panelAnim.transition, delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="decoPanel homeDeco3"
            {...panelAnim}
            transition={{ ...panelAnim.transition, delay: 0.6 }}
          ></motion.div>*/
