import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Web from "./Web";
function Webd() {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={1}>
        <Web />
      </Stage>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={-15}
      ></OrbitControls>
    </Canvas>
  );
}

export default Webd;
