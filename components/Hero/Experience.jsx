import {
  Text,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  Html,
} from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import { useControls } from "leva";
import React, { useState, useEffect } from "react";
import { Laptop } from "./Laptop";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import * as THREE from 'three';
const Background = () => {
  const { gl } = useThree();
  const texture = useLoader(THREE.TextureLoader, '/bg.jpg');
  return (
    <primitive attach="background" object={texture} />
  );
};

export default function Experience() {
  const width = window.innerWidth;

  const [on, setOn] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOn(true);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* <Perf position={"top-left"} /> */}
      <color args={["#402041"]} attach="background" />
      {/* <Background /> */}
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0, -0.5, 0]}
        position={[1, 4, 1]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.1}>
          {on && (
            <>
              {" "}
              <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={65}
                color={"#3f1e3c"}
                rotation={[-0.1, Math.PI, 0]}
                position={[0, 0.55, -1.15]}
              />
            </>
          )}

          {/* Animate laptop positon on scroll */}
          <Laptop width={width} positiony={-2} rotationx={0.13} />
        </Float>
      </PresentationControls>

      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} /> */}
    </>
  );
}
