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
        <div className="content">
          <div className="intro">
            <header>
              <h2>Tim D'hoore</h2>
              <p>Creative frontend developer</p>
            </header>
            <p className="shortInfo">
              Delectus reiciendis impedit possimus dolor esse vitae itaque
              ratione natus labore voluptatibus!
            </p>
          </div>
          <img src={logo} alt="Tim D'hoore logo" />
        </div>
        <div className="scrollNextPage">
          <Link to="/work" className="pixFont">
            Scroll for more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Home;
