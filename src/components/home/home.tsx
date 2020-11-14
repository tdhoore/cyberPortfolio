import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import HomeDeco from "./HomeDeco";
import Skills from "./Skills";
import Header from "../_core/Header";
import Intro from "./Intro";
import { useTransition, animated as a } from "react-spring";

const Home = ({routeAnimating, test}:any) => {
  return <>
    <article  className="homeArticle" style={{opacity: routeAnimating}}>
      <Header title="Tim D'hoore - home" url="https://www.timdhoore.com/"/>
      <div className="wrapper">
        <div className="accentBarAfter">
          <Intro routeAnimating={routeAnimating}/>
          <div className="homeDeco1">
            <HomeDeco delay={400}/>
          </div>
        </div>
        <Skills delay={200}/>
        <Logo delay={300}/>
      </div>
    </article>
  </>;
};

export default Home;