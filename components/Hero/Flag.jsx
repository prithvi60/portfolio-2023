import * as THREE from "three";
import { useRef, useState } from "react";
import { motion } from "framer-motion-3d"
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";

export function Flag() {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01
    );
  });
  return (
    <motion.mesh
    initial={{ opacity: 0, x:-100 }}
    animate={{ opacity: 1, x:2 }}
    transition={{
      duration: 0.8,
      delay: 0.3,
      ease: [0, 0.71, 0.2, 1.01]
    }}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={[26, 4, 1]}
      position={[2,-2,-4]}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial ref={ref} speed={5}>
        <GradientTexture
          stops={[0, 0.8, 1]}
          colors={["#e63946", "#f1faee", "#a8dadc"]}
          size={100}
        />
      </MeshDistortMaterial>
    </motion.mesh>
  );
}
