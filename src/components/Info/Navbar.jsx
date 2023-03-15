import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1700px;
  display: flex;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 100px 180px 100px;
  list-style: none;
  gap: 2.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  border-top: 1px solid #791b20;
  border-radius: 100%;
  padding: 10px 0;

  &:hover {
    color: #791b20;
    font-size: 20px;
    font-weight: 900;
    border-top: 1px solid #fff;
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: #ffffff96;
    padding: 10px 0;
    animation: listItmeAni 1s infinite ease-out alternate;

    @keyframes listItmeAni {
      to {
        transform: translateY(7px);
      }
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #660d12;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo-2.png" />
          <List>
            <ListItem>Hi!</ListItem>
            <ListItem>Personal Quality</ListItem>
            <ListItem>Services</ListItem>
          </List>
          <Icons>
            <Button>Contact Me</Button>
          </Icons>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
