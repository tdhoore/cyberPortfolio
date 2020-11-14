import React from "react";
import { Link } from "react-router-dom";
import { useTransition, animated as a, interpolate } from 'react-spring'

const Intro = ({routeAnimating}:any) => {
  const trans = (x:number, y:number, z:number) => `perspective(600px) translate3d(${x}px, ${y}px, ${z}px)`;

    const calcAnim = () => {
        return {
            transform: routeAnimating.interpolate([0, 1, 2], [trans(0, 0, -200), trans(0, 0, 0), trans(0, 0, 100)]),
            opacity: routeAnimating.interpolate([0, 1, 2], [0, 1, 0])
        }
    }
  
return <>
    <a.div className="intro panel" style={calcAnim()}>
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
</>;
};

export default Intro;