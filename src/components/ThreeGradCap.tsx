import { Canvas } from "@react-three/fiber";
import { Box, Cylinder } from "@react-three/drei";
import * as THREE from "three";
import { type ReactNode } from "react";

const Rectangle = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      rotation={[Math.PI, 0, 0]}
      args={[3, 0.2, 3]}
      material={new THREE.MeshPhongMaterial({ color: "#222222" })}
    >
      {children}
    </Box>
  );
};

const Cap1 = () => {
  return (
    <Cylinder
      position={[0, 0.4, 0]}
      args={[1.5, 1.5, 0.8, 32]}
      material={new THREE.MeshPhongMaterial({ color: "#222222" })}
    ></Cylinder>
  );
};

export default function ThreeGradCap() {
  return (
    <Canvas camera={{ position: [0, 1, 6] }}>
      <ambientLight intensity={1} />
      <pointLight intensity={3.5} position={[10, 10, 10]} />
      <Rectangle>
        <Cap1 />
      </Rectangle>
    </Canvas>
  );
}
