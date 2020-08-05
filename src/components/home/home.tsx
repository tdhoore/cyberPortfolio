import React, { useEffect } from "react";
import { props } from "./types";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import ScrollDetector from "../_core/ScrollDetector";
import { gotToWork } from "./api";

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
        <div className="pannelHolder">
          <div className="content panel">
            <div className="intro">
              <header>
                <h2>
                  <span>Tim D'hoore</span>
                </h2>
                <p>Creative developer</p>
              </header>
            </div>
            <img src={logo} alt="Tim D'hoore logo" />
            <div className="scrollNextPage">
              <Link to="/work" className="defaultButton">
                Scroll for more
              </Link>
            </div>
          </div>
          <div className="decoPanel homeDeco1"></div>
          <div className="decoPanel homeDeco2"></div>
          <div className="decoPanel homeDeco3"></div>
        </div>
      </div>
    </article>
  );
};

export default Home;
