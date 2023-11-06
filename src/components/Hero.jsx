import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  width: 100%;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.p`
  font-size: 24px;
  color: pink;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
`;
const Desc = styled.div`
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 20px;
    justify-content: center;
  }
`;

const Right = styled.div`
  position: relative;
  flex: 3;
  @media only screen and (max-width: 768px) {
    flex: 1;
    height: 25vh;
    width: 100%;
    text-align: center;
    padding: 60px;
  }
`;
const Img = styled.img`
  float: right;
  height: 570px;
  width: 500px;
  object-fit: contain;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: auto;
  animation: animate 1500ms infinite ease alternate;
  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

function Hero() {
  return (
    <Section>
      <Navbar></Navbar>
      <Container>
        <Left>
          <Title>Harikrishnan Ashok</Title>
          <WhatWeDo>
            <Line src="./img/line.png"></Line>
            <SubTitle>Front end Developer</SubTitle>
          </WhatWeDo>
          <Desc>sample text</Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true}></OrbitControls>
            <ambientLight intensity={2}></ambientLight>
            <directionalLight position={[6, 2, 3]}></directionalLight>
            <Sphere args={[1.5, 100, 200]} scale={0.9}>
              <MeshDistortMaterial
                color={"#302F30"}
                attach={"material"}
                distort={0.5}
                speed={2}
              ></MeshDistortMaterial>
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png"></Img>
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
