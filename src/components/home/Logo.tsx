import React, { useState } from "react";
import { useTransition, animated as a } from 'react-spring';
import { propsHomeDeco } from "./types";
import logoIcon from "../../assets/img/logo.svg";

const Logo = (props: propsHomeDeco) => {
  const trans = (x:number, y:number, z:number) => `perspective(600px) translate3d(${x}px, ${y}px, ${z}px) rotateY(5deg)`;

  const [start, setStart] = useState(false);

    setTimeout(() => {
        setStart(true);
    }, props.delay ? props.delay : 0);

    const transitions = useTransition(start, null, {
        from: { opacity: 0, transform: trans(0, 0, -300) },
        enter: { opacity: 1, transform: trans(0, 0, 0) },
        leave: { opacity: 0, transform: trans(0, 0, 0) },
        config: { mass: 1, tension: 350, friction: 25 }
    });
   
return <>{
    transitions.map(({item, key, props})=>
        item && 
        <a.div key={key} style={props} className="panel logo">
        <img src={logoIcon} alt="Tim D'hoore logo" />
      </a.div>)
}</>;
};

export default Logo;