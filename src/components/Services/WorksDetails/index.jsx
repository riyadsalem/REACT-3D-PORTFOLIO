import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Programming, Engineer, Development } from "./3DImg";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 700px 200px;
  grid-template-rows: 450px 150px;
`;
const CanvasItem = styled.div`
  width: 100%;
  height: 100%;
`;

const Desc = styled.div`
  width: 50vw;
  height: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 25vw;
  left: 25vw;
  font-size: 18px;
  border: 5px solid #660d12;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WorksDetails = ({ programming, development }) => {
  return (
    <Container>
      <CanvasItem>
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              {programming ? (
                <Programming />
              ) : development ? (
                <Development />
              ) : (
                <Engineer />
              )}
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </CanvasItem>
      <CanvasItem>
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              {programming ? (
                <Programming />
              ) : development ? (
                <Development />
              ) : (
                <Engineer />
              )}
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </CanvasItem>
      <CanvasItem>
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              {programming ? (
                <Programming />
              ) : development ? (
                <Development />
              ) : (
                <Engineer />
              )}
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </CanvasItem>
      <Desc>
        {programming
          ? "Programming languages are used to write code, which is a set of instructions that tell a computer what to do. These languages have their own syntax, rules, and structures that developers."
          : development
          ? "Software development can be complex and time-consuming, involving collaboration among multiple team members and stakeholders. To ensure successful development, it is important to have effective."
          : "Engineering can be divided into different fields, such as civil engineering, electrical engineering, mechanical engineering, chemical engineering, and many others."}
      </Desc>
    </Container>
  );
};

export default WorksDetails;
