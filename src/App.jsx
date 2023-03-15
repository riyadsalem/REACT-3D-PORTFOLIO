import { Contact, Info, PersonalQuality, Services } from "./components";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/alex-perez-ioJBsYQ-pPM-unsplash.jpg");

  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <Container>
      <Info />
      <PersonalQuality />
      <Services />
      <Contact />
    </Container>
  );
}
export default App;
