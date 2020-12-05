import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber/css3d";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";

const DOMObject = ({ dom }:any) => {
    const { scene } = useThree()
    const ref = useRef<CSS3DObject | null>(null)
    
    //@ts-ignore
    useEffect(() => {
      ref.current = new CSS3DObject(dom.current)
      scene.add(ref.current)
      //@ts-ignore
      return () => scene.remove(ref.current)
    }, [dom, scene]);
    return null
  }

  export default DOMObject;