import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import InfoBall from "./InfoBall";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Center = styled.div`
  width: 600px;
  height: 600px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Quality1 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Quality2 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Quality3 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Quality4 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Quality5 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Quality6 = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const Line1 = styled.img`
  height: 5px;
  width: 350px;
  position: absolute;
  top: 90%;
  right: -260px;
  transform: rotate(30deg);
`;

const Line2 = styled.img`
  height: 5px;
  width: 350px;
  position: absolute;
  top: 10%;
  right: -260px;
  transform: rotate(-30deg);
`;

const Line3 = styled.img`
  height: 5px;
  width: 290px;
  position: absolute;
  top: 50%;
  right: -230px;
`;
const Line4 = styled.img`
  height: 5px;
  width: 350px;
  position: absolute;
  top: 90%;
  left: -260px;
  transform: rotate(-30deg);
`;
const Line5 = styled.img`
  height: 5px;
  width: 350px;
  position: absolute;
  top: 10%;
  left: -260px;
  transform: rotate(30deg);
`;
const Line6 = styled.img`
  height: 5px;
  width: 290px;
  position: absolute;
  top: 50%;
  left: -230px;
`;

const PersonalQuality = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Section>
      <Container>
        <Center onClick={() => setVisible((prev) => !prev)}>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <InfoBall title="CLICK HERR!!" />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Center>
        {visible && (
          <>
            <Quality1>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <InfoBall title="Flexibility" />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
              <Line1 src="./img/line.png" />
            </Quality1>
            <Quality2>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <InfoBall title="Adaptability" />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
              <Line2 src="./img/line.png" />
            </Quality2>
            <Quality3>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <InfoBall title="Persistence" />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
              <Line3 src="./img/line.png" />
            </Quality3>
            <Quality4>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <InfoBall title="Attention" />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
              <Line4 src="./img/line.png" />
            </Quality4>
            <Quality5>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <InfoBall title="Efficiency" />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
              <Line5 src="./img/line.png" />
            </Quality5>
            <Quality6>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <InfoBall title="Productivity" />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
              <Line6 src="./img/line.png" />
            </Quality6>
          </>
        )}
      </Container>
    </Section>
  );
};

export default PersonalQuality;
