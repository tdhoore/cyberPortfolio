import React, { useState } from "react";
import { useTransition, animated as a } from 'react-spring';
import { propsHomeDeco } from "./types";

const Skills = (props: propsHomeDeco) => {
  const trans = (x:number, y:number, z:number) => `perspective(600px) translate3d(${x}px, ${y}px, ${z}px) rotateY(1deg)`;

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
          <a.div key={key} style={props} className="panel skills pixFont">
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
        </a.div>)
}</>;
};

export default Skills;