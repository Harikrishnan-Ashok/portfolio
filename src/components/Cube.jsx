import { PerspectiveCamera, RenderTexture } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {
  const textRef = useRef();
  useFrame(
    (state) => (textRef.current.position.x = Math.tan(state.clock.elapsedTime))
  );
  return (
    <mesh>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
          ></PerspectiveCamera>
          <color attach="background" args={[0.7, 0.4, 0.7]}></color>
          <Text ref={textRef} fontSize={0.7} color="#333">
            HELLO!
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
