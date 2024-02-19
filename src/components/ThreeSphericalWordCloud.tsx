"use client";

//TODO: this causes window error
import { Text } from "@react-three/drei";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type WordProps = {
  children: string | THREE.Vector3 | undefined;
  [key: string]: unknown;
};

function Word({ children, ...props }: WordProps) {
  const ref =
    useRef<
      THREE.Mesh<
        THREE.BufferGeometry<THREE.NormalBufferAttributes>,
        THREE.Material | THREE.Material[]
      >
    >();

  const color = new THREE.Color();

  const fontProps = {
    fontSize: 2,
    "material-toneMapped": true,
  };

  const [hovered, setHovered] = useState(false);

  const over = (e: ThreeEvent<PointerEvent>) => (
    e.stopPropagation(), setHovered(true)
  );

  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // Tie component to the render-loop
  useFrame(({ camera }) => {
    if (ref.current) {
      // Make text face the camera
      ref.current.rotation.copy(camera.rotation);

      // Animate font color
      if ((ref.current.material as THREE.MeshBasicMaterial).color) {
        (ref.current.material as THREE.MeshBasicMaterial).color.lerp(
          color.set(hovered ? "#02B284" : "white"),
          0.1
        );
      }

      // Animate font scale
      ref.current.scale.lerp(
        hovered ? new THREE.Vector3(1.2, 1.2, 1.2) : new THREE.Vector3(1, 1, 1),
        0.1
      );
    }
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      // eslint-disable-next-line react/no-children-prop
      children={children as ReactNode}
    ></Text>
  );
}

type CloudProps = {
  radius?: number;
  wordArr?: string[];
  rotationDirectionConstant?: number;
};

function Cloud({
  radius = 20,
  wordArr = [],
  rotationDirectionConstant = 0.0001,
}: CloudProps) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (wordArr.length + 1);
    const thetaSpan = (Math.PI * 2) / wordArr.length;
    return wordArr.map((word, idx) => [
      new THREE.Vector3().setFromSpherical(
        spherical.set(radius, phiSpan * idx, thetaSpan * idx)
      ),
      word,
    ]);
  }, [wordArr, radius]);

  useFrame(({ camera }) => {
    camera.rotateOnAxis(new THREE.Vector3(0, 0, 35), rotationDirectionConstant);
  });

  return (
    <group>
      {words.map(([pos, word], index) => (
        // eslint-disable-next-line react/no-children-prop
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );
}

export default function ThreeSphericalWordCloud({
  wordArr,
  rotationDirectionConstant,
}: {
  wordArr: string[];
  rotationDirectionConstant: number;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Cloud
        radius={14}
        rotationDirectionConstant={rotationDirectionConstant}
        wordArr={wordArr}
      />
    </Canvas>
  );
}
