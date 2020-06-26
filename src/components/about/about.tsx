import React from "react";
import { props } from "./types";

const About = (props: props) => {
  return (
    <article>
      <header>
        <h2>Hi, I'm Tim D'hoore</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          labore inventore ex quas aliquam nesciunt saepe in numquam cupiditate
          vel, aliquid suscipit error itaque culpa quo. Vitae est perferendis
          tempore.
        </p>
      </header>
      <img src="https://via.placeholder.com/236x353" alt="" />
    </article>
  );
};

export default About;
