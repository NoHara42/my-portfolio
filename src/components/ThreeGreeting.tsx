import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { type MutableRefObject, useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";

function ThreeGreeting({ className }: { className: string }) {
  return (
    <Canvas className={className} camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.2} />
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const ref = useRef() as MutableRefObject<Group>;
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    ref.current.rotation.x = scrollYProgress.get() * 10;
    ref.current.rotation.y = scrollYProgress.get() * 10;
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      {Array(300)
        .fill(null)
        .map((_, idx) => (
          <Star key={idx} />
        ))}
    </group>
  );
}

function Star() {
  return (
    <>
      <mesh
        position={
          new THREE.Vector3(
            THREE.MathUtils.randFloatSpread(1000),
            THREE.MathUtils.randFloatSpread(1000),
            THREE.MathUtils.randFloatSpread(1000)
          )
        }
      >
        <octahedronGeometry args={[0.7, 4]}></octahedronGeometry>
        <meshToonMaterial color={0xffffff}></meshToonMaterial>
      </mesh>
    </>
  );
}

export default ThreeGreeting;
