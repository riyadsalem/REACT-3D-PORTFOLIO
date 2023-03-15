import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Center = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 100%;
  animation: animateImg 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animateImg {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(20px);
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 24px;
  color: lightgray;
  position: absolute;
  right: 100px;
  top: 100px;
  box-shadow: #660d12 2px 10px 15px 0.5px;
  padding: 30px;
  border-radius: 10px;
  animation: animateDesc 2s linear infinite alternate;

  @keyframes animateDesc {
    from {
      transform: translateX(-30px);
    }
    to {
      transform: translateX(30px);
    }
  }
`;

const DescDetails = styled.div`
  width: 100%;
`;

const Span = styled.span`
  color: #660d12;
  font-size: 28px;
  font-weight: 800;
`;

const LineLeft = styled.img`
  height: 5px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: -100px;
`;

const Right = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 24px;
  color: lightgray;
  position: absolute;
  left: 100px;
  top: 100px;
  box-shadow: #660d12 2px 10px 15px 0.5px;
  padding: 30px;
  border-radius: 10px;
  animation: animateDesc 2s linear infinite alternate;

  @keyframes animateDesc {
    from {
      transform: translateX(-30px);
    }
    to {
      transform: translateX(30px);
    }
  }
`;
const LineRight = styled.img`
  height: 5px;
  width: 100px;
  position: absolute;
  top: 50%;
  right: -100px;
`;

const Info = () => {
  const descArr = [
    { key: "Name", value: "Riyad Salem" },
    { key: "Title", value: "Full Stack Developer" },
    { key: "Address", value: "Palestine - Gaza" },
    { key: "Phone", value: "+972592290424" },
    { key: "Email", value: "riyad.m.salem.19988" },
    { key: "LinkedIn", value: "/riyadms" },
    { key: "GitHub", value: "/riyadsalem" },
  ];

  const descriptionItme = descArr.map((item, index) => (
    <DescDetails key={index}>
      <Span>{item.key}:</Span> {item.value}
    </DescDetails>
  ));

  return (
    <Section>
      <Navbar />
      <Container>
        <Right>
          <DescDetails>
            I am a computer systems engineer, developer, and website builder
            with many technologies and a wide variety, with a keen interest in
            JavaScript technology (React.js and Node.js) in terms of programming
            and design, as well as Backend PHP Laravel and WordPress technology.
            I strive to improve the world and make it smarter.
          </DescDetails>
          <LineRight src="./img/line.png" />
        </Right>
        <Center>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 5, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#660d12"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/RiyadMSalem_Image.jpg" />
        </Center>
        <Left>
          {descriptionItme}
          <LineLeft src="./img/line.png" />
        </Left>
      </Container>
    </Section>
  );
};

export default Info;
