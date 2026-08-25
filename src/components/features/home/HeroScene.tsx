"use client";

import { Environment, Float, RoundedBox, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type * as THREE from "three";

const NODE_LABELS = ["React", "TS", "Next", "Node", "DB", "{ }"];

const NODE_COLORS = [
  "#61dafb",
  "#3178c6",
  "#a78bfa",
  "#7A2EFF",
  "#22d3ee",
  "#c084fc",
];

const OrbitingNode = ({
  label,
  color,
  radius,
  speed,
  offset,
  yTilt,
}: {
  label: string;
  color: string;
  radius: number;
  speed: number;
  offset: number;
  yTilt: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;

    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(t) * radius;
      groupRef.current.position.z = Math.sin(t) * radius;
      groupRef.current.position.y = Math.sin(t * 1.4) * yTilt;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        <RoundedBox args={[0.85, 0.85, 0.18]} radius={0.12} smoothness={4}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.35}
            roughness={0.3}
            metalness={0.4}
          />
        </RoundedBox>
        <Text
          fontSize={0.2}
          color="#0a0a0f"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.11]}
        >
          {label}
        </Text>
      </Float>
    </group>
  );
};

const CoreOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshStandardMaterial
        color="#7A2EFF"
        emissive="#7A2EFF"
        emissiveIntensity={0.5}
        roughness={0.15}
        metalness={0.6}
        wireframe
      />
    </mesh>
  );
};

const SceneContent = () => {
  const nodes = useMemo(
    () =>
      NODE_LABELS.map((label, i) => ({
        label,
        color: NODE_COLORS[i % NODE_COLORS.length],
        radius: 2.5 + (i % 2) * 0.4,
        speed: 0.28 + i * 0.03,
        offset: (i / NODE_LABELS.length) * Math.PI * 2,
        yTilt: 0.6 + (i % 3) * 0.2,
      })),
    [],
  );

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#a78bfa" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#61dafb" />

      <CoreOrb />

      {nodes.map((node) => (
        <OrbitingNode key={node.label} {...node} />
      ))}

      <Environment preset="city" />
    </>
  );
};

/**
 * Lightweight R3F hero scene: an orbiting constellation of tech-stack
 * nodes around a wireframe core. Kept intentionally simple (low geometry
 * count, no heavy postprocessing) to stay performant.
 */
const HeroScene = () => {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.6, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
