import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Development(props) {
  const { nodes, materials } = useGLTF("/development-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Cube099__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-216.52, 146.71, 53.1]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder006__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 187.01, 114.87]}
          rotation={[2.75, 1.34, 2.01]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder035__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 112.12, -22.53]}
          rotation={[-1.74, 1.24, 0.17]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane058__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.93, 146.71, 53.1]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane059__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 171.04, 139.11]}
          rotation={[-1.69, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane060__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 156.67, 128.08]}
          rotation={[-1.36, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane061__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 186, 80.1]}
          rotation={[-1.42, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane062__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 89.54, 132.79]}
          rotation={[-1.74, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane063__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 103.44, 64.35]}
          rotation={[-1.7, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane064__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 91.87, 86.48]}
          rotation={[-1.4, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane065__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 91.56, 38.99]}
          rotation={[-1.5, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane066__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 102.85, 28.09]}
          rotation={[-1.28, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane067__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 187.84, 152.71]}
          rotation={[-1.85, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane068__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 147.4, 144.76]}
          rotation={[-1.7, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane069__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 171.28, -32.66]}
          rotation={[-1.87, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane070__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.57, 171.49, -53.36]}
          rotation={[-1.26, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane071__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 126.56, -33.81]}
          rotation={[-1.4, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane072__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.25, 192.96, 10.71]}
          rotation={[-1.52, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane073__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 190.37, 31.83]}
          rotation={[-1.84, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane074__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 153.19, -31.76]}
          rotation={[-1.61, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane075__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-215.37, 106.98, -21.86]}
          rotation={[-1.53, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder007__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 194.86, 150.68]}
          rotation={[2.52, 1.51, 2.24]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder008__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 181.56, 137.06]}
          rotation={[2.52, 1.51, 2.24]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder009__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 167.66, 128.34]}
          rotation={[0.92, 1.36, -2.44]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder010__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 152.73, 144.02]}
          rotation={[1.82, 1.56, 2.95]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder011__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 187.32, -8.9]}
          rotation={[0.07, 1.46, -1.59]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder012__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 106.89, -8.32]}
          rotation={[-3.11, 1.48, 1.59]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder013__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 106.65, 114.23]}
          rotation={[-2.36, 1.5, 0.84]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder014__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 107.08, 151.24]}
          rotation={[-2.36, 1.5, 0.84]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder015__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 99.86, 109.81]}
          rotation={[-0.62, 1.21, -0.91]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder016__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 97.13, 87.38]}
          rotation={[-2.5, 1.14, 1.04]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder017__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 108.91, 62.88]}
          rotation={[-0.62, 1.16, -0.93]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder018__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 192.58, 81.3]}
          rotation={[-2.15, 1.24, 0.67]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder019__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 195.46, 30.2]}
          rotation={[-0.68, 1.26, -0.84]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder020__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 200.04, 11.55]}
          rotation={[-2.53, 1.3, 1.04]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder021__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 177.74, -34.29]}
          rotation={[-2.53, 1.3, 1.04]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder022__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 179.93, -48.5]}
          rotation={[-2.53, 1.3, 1.04]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder023__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 158.65, -32.04]}
          rotation={[-0.16, 1.26, -1.36]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder024__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 132.85, -32.98]}
          rotation={[-1.81, 1.35, 0.33]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder025__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 108.06, 28.97]}
          rotation={[-2.59, 1.05, 1.15]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder026__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 96.97, 38.62]}
          rotation={[-0.46, 1.33, -1.03]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.61, 153.13, 94.41]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={50.77}
        />
        <mesh
          geometry={nodes.Cylinder027__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 161.14, 97.26]}
          rotation={[-2.19, 1.07, 0.72]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder029__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 123.95, 94.4]}
          rotation={[-0.21, 1.25, -1.33]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder030__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 155.39, 29.6]}
          rotation={[-1.85, 1.33, 0.34]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder031__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 166.75, 13.88]}
          rotation={[-0.29, 1.19, -1.27]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder032__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 143.29, 13.39]}
          rotation={[-1.07, 1.38, -0.46]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder033__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.68, 155.07, 98.54]}
          rotation={[-1.07, 1.38, -0.46]}
          scale={100}
        />
        <mesh
          geometry={nodes.BezierCurve001__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.61, 87.38, 98.31]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={50.77}
        />
        <mesh
          geometry={nodes.BezierCurve002__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.61, 107.92, 22.21]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={50.77}
        />
        <mesh
          geometry={nodes.BezierCurve003__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[-214.61, 138.46, -1.01]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={50.77}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/development-transformed.glb");
