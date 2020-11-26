import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated as a } from 'react-spring'

<<<<<<< Updated upstream
const Intro = () => {
    const trans = (x:number, y:number, z:number) => `perspective(600px) translate3d(${x}px, ${y}px, ${z}px)`;

    const transitions = useTransition(true, null, {
        from: { opacity: 0, transform: trans(0, 0, -300) },
        enter: { opacity: 1, transform: trans(0, 0, 0) },
        leave: { opacity: 0, transform: trans(0, 0, 0) },
        config: { mass: 1, tension: 350, friction: 25 }
    });
=======
const Intro = ({inroAnim}:any) => {
  const trans = (x:number, y:number, z:number) => `perspective(600px) translate3d(${x}px, ${y}px, ${z}px)`;

    const calcAnim = () => {
        return {
            transform: inroAnim.interpolate([0, 1, 2], [trans(0, 0, -200), trans(0, 0, 0), trans(0, 0, 100)]),
            opacity: inroAnim.interpolate([0, 1, 2], [0, 1, 0])
        }
    }
>>>>>>> Stashed changes
  
return <>
    {
    transitions.map(({item, key, props})=>
        item && 
        <a.div key={key} style={props} className="intro panel" >
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
        </a.div>
    )}
</>;
};

export default Intro;