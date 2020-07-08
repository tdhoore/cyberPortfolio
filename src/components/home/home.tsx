import React from "react";
import { props } from "./types";
import logo from "../../assets/img/logo.svg";

const Home = (props: props) => {
  return (
    <article className="homeArticle">
      <div className="wrapper">
        <div className="intro">
          <header>
            <h2>Tim D'hoore</h2>
            <p>Creative frontend developer</p>
          </header>
          <p className="shortInfo">
            Delectus reiciendis impedit possimus dolor esse vitae itaque ratione
            natus labore voluptatibus!
          </p>
        </div>
        <img src={logo} alt="Tim D'hoore logo" />
      </div>
    </article>
  );
};

export default Home;
