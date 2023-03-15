import React, { useRef, useState, Suspense } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Stop from "./Stop";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  box-shadow: #660d12 0px 5px 15px;
  border-radius: 30px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #660d1165;
  border: none;
  border-radius: 30px;
  outline: none;
  color: #fff;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 30px;
  background-color: #660d1165;
  resize: none;
  outline: none;
  color: #fff;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #660d12;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", ref.current, "public_key")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <Stop />
              </Stage>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
