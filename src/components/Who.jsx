import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Desc = styled.div``;

const Left = styled.div`
  position: relative;
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
    padding-top: 20px;
  }
`;
function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true}></OrbitControls>
            <ambientLight intensity={1}></ambientLight>
            <directionalLight position={[1, 2, 3]}></directionalLight>
            <Cube></Cube>
          </Canvas>
        </Left>
        <Right>
          <Title>About me</Title>
          <WhatWeDo>
            <Line src="./img/line.png"></Line>
            {/* <SubTitle>this is what we do</SubTitle> */}
          </WhatWeDo>
          <Desc>
            Im an aspiring web developer with expertise in HTML, CSS,
            JavaScript, and experience in C/C++, MongoDB, Node.js, and
            Express.js. Im dedicated to enhancing my front-end skills with
            React.js and actively contribute to the web development community.
            Lets connect and explore exciting opportunities in web development!
          </Desc>
          <Button>see other works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
