import React from "react";
import { props } from "./types";

const About = (props: props) => {
  return (
    <article className="aboutArticle">
      <div className="wrapper">
        <div className="titleAndInfo panel">
          <header>
            <h2>
              Hi, I'm
              <br />
              Tim D'hoore
            </h2>
            <p>sub title</p>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur labore inventore ex quas aliquam nesciunt saepe in
            numquam cupiditate vel, aliquid suscipit error itaque culpa quo.
            Vitae est perferendis tempore.
          </p>
        </div>
        <div className="imageHolder panel">
          <img src="https://via.placeholder.com/236x353" alt="" />
          <div className="decoPanel aboutDeco2"></div>
        </div>
        <div className="panel aboutDeco1"></div>
      </div>
    </article>
  );
};

export default About;
