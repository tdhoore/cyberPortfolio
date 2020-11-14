import React from "react";
import { Link } from "react-router-dom";
import { useTransition, animated as a } from 'react-spring'

const Intro = ({routeAnimating}:any) => {
  const trans = (x:number, y:number, z:number) => `perspective(600px) translate3d(${x}px, ${y}px, ${z}px)`;

    const transitions = useTransition(true, null, {
        from: { transform: trans(0, 0, -200) },
        enter: { transform: trans(0, 0, 0) },
        leave: { transform: trans(0, 0, 100) },
        config: { mass: 1, tension: 350, friction: 25 },
     
    });
  
return <>{
    transitions.map(({item, key, props})=>
    item && 
    <a.div 
        key={key}
        className="intro panel" 
        style={props}
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
    </a.div>)
}</>;
};

export default Intro;