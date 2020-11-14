import React, { useState } from "react";
import Logo from "./Logo";
import HomeDeco from "./HomeDeco";
import Skills from "./Skills";
import Header from "../_core/Header";
import Intro from "./Intro";
import { useTransition, animated as a } from "react-spring";

const Home = ({routeAnimating, test}:any) => {
  const transitions = useTransition(true, null, {
    from: { opacity: 0,backgroundColor: "red" },
    enter: { opacity: 1,backgroundColor: "blue" },
    leave: { opacity: 1,backgroundColor: "pink" },
    update: {
      opacity: 1,
      backgroundColor: "green",
    },
    config: { mass: 1, tension: 350, friction: 25 }
  });

  console.log(test)

  return <>
    <a.article  className="homeArticle">
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
    </a.article>
  </>;
};

export default Home;