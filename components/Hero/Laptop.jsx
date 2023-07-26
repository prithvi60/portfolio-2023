import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { useControls } from "leva";
import VideoCard  from "../Common/VideoCard";
import { motion } from "framer-motion-3d"
const STEP_DURATION = 1000;
const SCREEN_TILT = 3000;
export function Laptop({ x, y, z, rotX, width }) {
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const intialposition = [0, -1.1, -2];
  // const { position, rotationy, rotationx, rotationz } = useControls({
  //   position: {
  //     value: { x: 0, y: -1.1, z: -2 },
  //     step: 0.01,
  //   },
  //   rotationy: {
  //     value: 0,
  //     step: 0.01,
  //   },
  //   rotationz: {
  //     value: 1,
  //     step: 0.01,
  //   },
  //   rotationx: {
  //     value: 1.35,
  //     step: 0.01,
  //   },
  //   distance: 0,
  // });
  const myMesh = React.useRef();
  const [on, setOn] = React.useState(false);
  const [{ down }, api] = useSpring(() => ({
    from: {
      down: -1.1,
    },

    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: false,
    // immediate: true,
  }));
  const [{ screenX }, apiscreen] = useSpring(() => ({
    from: {
      screenX: 1.2,
    },
    to: [
      {
        screenX: 0.13,
        delay: SCREEN_TILT,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: false,
    onStart: () => {
      api.start({
        from: {
          down: -1.1,
        },
        to: {
          down: -2.5,
        },
      });
    },
    onRest: () => {
      setOn(true);
    },
    // immediate: true,
  }));

  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 3.13,
    },
    to: [
      {
        carouselRotation: 1.311,
        delay: STEP_DURATION,
      },
    ],

    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: false,
  });

  return (
    <animated.group
      // position-x={x}
      // position-y={y}
      // position-z={z}
      // rotation-y={rotX}
      position={intialposition}
      // position-x={position.x}
      position-y={down}
      // position-z={position.z}
      // rotation-y={screenX}
      rotation-x={screenX}
      // rotation-z={screenX}
      dispose={null}
    >
      <motion.group
          initial={{ opacity: 0, z:100 }}
          animate={{ opacity: 1, z:0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        // position={[0, 0.519, 0]}
        // scale={0.103}
        scale={width > 600 ? 0.103 : 0.05}
        position={width > 600 ? [0, 0.519, 0] : [0, 1.819, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.USB_C_INSIDE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <group position={[0, -0.509, 0]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.USB_C_INSIDE}
          />
        </group>
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCameraRing001.geometry}
          material={materials["CameraRIngBlack.002"]}
          position={[-0.155, 19.571, -16.151]}
          scale={5.796}
        /> */}
        <group position={[-11.786, -0.15, -8.301]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["Keyboard.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Key}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KeyboardKeyHole.geometry}
          material={materials["Keyboard.001"]}
          position={[-11.786, -0.152, -8.301]}
          scale={5.796}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.951, -0.751, 7.857]}
          scale={5.796}
        />
        <group position={[0.011, -0.211, -10.559]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[-15.026, 0.031, 0.604]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group position={[12.204, 0.031, 0.604]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        {/* Screen model */}
        {/* start 3.13 */}
        {/* end 1.311 */}
        <animated.group
          position={[0.007, -0.472, -10.412]}
          //   rotation={[1.311, 0, 0]}
          // rotation={[3.13, 0.008, 0]}
          rotation={[3.13, 0.008, 0]}
          rotation-x={carouselRotation}
          scale={5.796}
          // rotation-x={open}
          ref={myMesh}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          >
            {/* Website */}
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.92}
              // {"position":{"x":-0.04999999999999996,"y":0,"z":1.9100000000000006}}
              position={[-0.05999999999999996, 0, -1.91]}
              rotation-x={-1.57}
            >
              {on && (
                // <iframe src="https://portfolio-2023-seven-hazel.vercel.app/" />
                <VideoCard />
              )}
            </Html>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AppleLogo000.geometry}
            material={materials["AppleLogo.004"]}
            position={[0.005, -0.111, -1.795]}
            rotation={[-Math.PI, 0, -Math.PI]}
            rotation-y={3.2}
            scale={0.579}
          />
        </animated.group>
      </motion.group>
    </animated.group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
);
