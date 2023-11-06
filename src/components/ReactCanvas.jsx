import { Stage } from "@react-three/drei";
import Reactlogo from "./Reactlogo";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function ReactCanvas() {
  return (
    <Canvas>
      <Stage>
        <Reactlogo></Reactlogo>
      </Stage>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={10}
      ></OrbitControls>
    </Canvas>
  );
}

export default ReactCanvas;
