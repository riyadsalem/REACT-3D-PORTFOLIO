import React, { useState } from "react";
import styled from "styled-components";
import WorksDetails from "./WorksDetails";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListItem = styled.li`
  font-size: 38px;
  letter-spacing: 5px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.8px white;
  position: relative;
  border-top: 2px solid #660d12;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #660d12;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Bottom = styled.div`
  color: black;
`;

export default function Services() {
  const data = ["Programming", "Development", "Engineering"];
  const [work, setWork] = useState(data[0]);
  return (
    <Section>
      <Container>
        <Top>
          <List>
            {data.map((item, index) => (
              <ListItem key={index} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Top>
        <Bottom>
          {work === "Programming" ? (
            <WorksDetails programming />
          ) : work === "Development" ? (
            <WorksDetails development />
          ) : (
            <WorksDetails />
          )}
        </Bottom>
      </Container>
    </Section>
  );
}
