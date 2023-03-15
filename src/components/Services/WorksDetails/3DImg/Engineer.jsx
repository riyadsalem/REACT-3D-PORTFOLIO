import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Engineer(props) {
  const { nodes, materials } = useGLTF("/engineer-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[76.91, -596.13, 500.43]} rotation={[0.18, 0.18, 1.9]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/engineer-transformed.glb");
