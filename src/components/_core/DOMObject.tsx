import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber/css3d";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
import * as THREE from 'three';

const DOMObject = ({ dom, position, rotation }:any) => {
  const { scene } = useThree()
  const ref = useRef<CSS3DObject | null>(null);
  
  let pos = new THREE.Vector3(0, 0, 0);
  let rot = new THREE.Euler(0, 0, 0);

  if (position) {
     pos = new THREE.Vector3(position[0], position[1], position[2]);
  
  }

  if (rotation) {
     rot = new THREE.Euler(rotation[0], rotation[1], rotation[2]);
  }
    
    //@ts-ignore
    useEffect(() => {
      ref.current = new CSS3DObject(dom.current);
      ref.current.position.copy(pos);
      ref.current.rotation.copy(rot);
      scene.add(ref.current)
      //@ts-ignore
      return () => scene.remove(ref.current)
    }, [dom, position, rotation, scene]);
    return null
}

  export default DOMObject;