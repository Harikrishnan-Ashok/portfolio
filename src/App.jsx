import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;

  background: rgb(82, 82, 82);
  background: radial-gradient(
    circle,
    rgba(82, 82, 82, 1) 0%,
    rgba(64, 64, 64, 1) 45%,
    rgba(0, 0, 0, 1) 100%
  );

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero></Hero>
      <Who></Who>
      <Works></Works>
      <Contact></Contact>
    </Container>
  );
}

export default App;
