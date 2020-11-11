import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import { useSpring, animated } from 'react-spring'
import Header from "../_core/Header";

const Home = () => {
  let timeOut:any = false;

  const map = (value:number, x1:number, y1:number, x2:number, y2:number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

  const calc = (x:number, y:number, maxRot = 5,xDefault = 0, yDefault = 0) => [map(y, 0, window.innerHeight/2, maxRot, -maxRot) + yDefault, map(x, 0, window.innerWidth/2, -maxRot, maxRot) + xDefault];

  const trans = (x:number, y:number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;

  const [main, setMain] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }));

  const [logoAnim, setLogoAnim] = useSpring(() => ({ xy: [0, 5], config: { mass: 5, tension: 350, friction: 40 } }));

  const [decoAnim, setDecoAnim] = useSpring(() => ({ xy: [0, -5], config: { mass: 5, tension: 350, friction: 40 } }));

  const [carroucelAnim, setCarroucelAnim] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }));

  const handleMouseMove = (x:number, y:number) => {
    setMain({ xy: calc(x, y, 2)});
    setLogoAnim({ xy: calc(x, y, 5, 0, 5)});
    setDecoAnim({ xy: calc(-x, y, 2, 0, -5)});
    setCarroucelAnim({ xy: calc(x, -y, 2)});

    if(timeOut) {
      clearTimeout(timeOut);
    }
    
    timeOut = setTimeout(()=>{
      resetAnimations();
    }, 2000)

  };

  const resetAnimations = () => {
    setMain({ xy: [0, 0] });
    setLogoAnim({ xy: [0, 5]});
    setDecoAnim({ xy: [0, -5]});
    setCarroucelAnim({ xy: [0, 0] });
  };

  const handleMouseLeave = () => {
    resetAnimations();
  };

  return (
    <article className="homeArticle" 
      onMouseMove={({ clientX: x, clientY: y }) => handleMouseMove(x, y)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Header title="Tim D'hoore - home" url="https://www.timdhoore.com/"/>
      <div className="wrapper">
        <div className="accentBarAfter">
          <animated.div 
            className="intro panel" 
            //@ts-ignore
            style={{ transform: main.xy.interpolate(trans) }}
          >
            <header>
              <h2>
                <span>Tim D'hoore</span>
              </h2>
              <p>Creative developer</p>
            </header>
            <p className="shortInfo">
            Let’s create something digital together, that really tells how awesome you are.
            </p>
            <div className="scrollNextPage">
              <Link to="/work" className="defaultButton">
                Start exploring
              </Link>
            </div>
          </animated.div>
          <div className="homeDeco1">
            <animated.div
              className="decoPanel"
              //@ts-ignore
              style={{ transform: decoAnim.xy.interpolate(trans) }}
              /*{...panelAnim}
              transition={{ ...panelAnim.transition, delay: 0.55 }}*/
            >
              <div></div>
            </animated.div>
          </div>
        </div>
        <animated.div
          className="panel skills pixFont"
         /* {...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.5 }}*/
          //@ts-ignore
          style={{ transform: carroucelAnim.xy.interpolate(trans) }}
        >
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
        </animated.div>
        <animated.div
          className="panel logo"
          /*{...panelAnim}
          transition={{ ...panelAnim.transition, delay: 0.4 }}*/
           //@ts-ignore
           style={{ transform: logoAnim.xy.interpolate(trans) }}
        >
          <img src={logo} alt="Tim D'hoore logo" />
        </animated.div>
      </div>
    </article>
  );
};

export default Home;
