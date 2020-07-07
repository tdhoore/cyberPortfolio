import React from "react";
import { props } from "./types";

const About = (props: props) => {
  return (
    <article className="aboutArticle">
      <div className="wrapper">
        <div className="titleAndInfo">
          <header>
            <h2>I'm Tim D'hoore</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur labore inventore ex quas aliquam nesciunt saepe in
            numquam cupiditate vel, aliquid suscipit error itaque culpa quo.
            Vitae est perferendis tempore.
          </p>
        </div>
        <div className="imageHolder">
          <img src="https://via.placeholder.com/236x353" alt="" />
        </div>
      </div>
    </article>
  );
};

export default About;
