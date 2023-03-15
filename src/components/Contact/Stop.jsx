import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Stop(props) {
  const { nodes, materials } = useGLTF("/stop-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.05, 151.46, 0.73]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.05, 0.73, 150]}>
          <mesh
            geometry={nodes["Stop_Sign_07_-_Default_0"].geometry}
            material={materials["07_-_Default"]}
          />
          <mesh
            geometry={nodes["Stop_Sign_08_-_Default_0"].geometry}
            material={materials["08_-_Default"]}
          />
          <mesh
            geometry={nodes["Stop_Sign_02_-_Default_0"].geometry}
            material={materials["02_-_Default"]}
          />
          <mesh
            geometry={nodes["Stop_Sign_03_-_Default_0"].geometry}
            material={materials["03_-_Default"]}
          />
          <mesh
            geometry={nodes["Stop_Sign_01_-_Default_0"].geometry}
            material={materials["01_-_Default"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/stop-transformed.glb");
