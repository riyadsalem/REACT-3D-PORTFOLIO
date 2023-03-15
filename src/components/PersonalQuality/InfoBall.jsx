import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const InfoBall = ({ title }) => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#660d12"]} />
          <Text ref={textRef} fontSize={0.5} color="#ffffff">
            {title}
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default InfoBall;
