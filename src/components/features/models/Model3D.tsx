"use client";

import { Center, Float, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import type { ModelAnimationPreset } from "@/packages/configs/models.config";

interface Model3DProps {
  /** Path to the .glb, e.g. "/models/desk-setup.glb" (served from /public). */
  src: string;
  /** Target size — model is auto-scaled so its largest bounding-box axis
   * equals this many scene units. Keeps every model visually consistent
   * regardless of how the designer exported/scaled it in Blender. */
  size?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  animation?: ModelAnimationPreset;
  /** Name of an embedded animation clip to play (from the GLB itself),
   * e.g. an idle loop the designer baked in. Overrides nothing — runs
   * alongside the `animation` preset. */
  clip?: string;
}

/**
 * Auto-fits + centers a loaded GLTF scene to a target `size`, so designers
 * can export models at any scale without breaking layout.
 */
const useAutoFit = (scene: THREE.Group, size: number) => {
  return useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const dimensions = new THREE.Vector3();
    box.getSize(dimensions);

    const largestAxis = Math.max(dimensions.x, dimensions.y, dimensions.z) || 1;
    const scale = size / largestAxis;

    return scale;
  }, [scene, size]);
};

/**
 * Reusable GLB loader: drop in a model path + desired size, get an
 * auto-scaled, auto-centered, optionally-animated 3D object. Must be
 * rendered inside a react-three-fiber <Canvas>.
 *
 * @example
 * <Canvas>
 *   <Model3D src="/models/desk-setup.glb" size={3} animation="float" />
 * </Canvas>
 */
const Model3D = ({
  src,
  size = 2,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  animation = "none",
  clip,
}: Model3DProps) => {
  const { scene, animations } = useGLTF(src);
  const groupRef = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, groupRef);
  const scale = useAutoFit(scene, size);

  // Play an embedded clip (e.g. an idle animation baked into the GLB).
  useEffect(() => {
    if (!clip) return;

    const action = actions[clip];
    action?.reset().fadeIn(0.3).play();

    return () => {
      action?.fadeOut(0.3);
    };
  }, [actions, clip]);

  // "entrance" preset: pop the model in with a GSAP scale/rotation tween
  // on mount (e.g. when it scrolls into view via the parent's Reveal).
  // biome-ignore lint/correctness/useExhaustiveDependencies: mount-only entrance tween by design — re-running on every `animation` change would restart the pop-in tween mid-scroll
  useEffect(() => {
    if (animation !== "entrance" || !groupRef.current) return;

    const target = groupRef.current.scale;
    target.set(0, 0, 0);

    const from = { x: 0, y: 0, z: 0 };

    gsap.to(from, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.1,
      ease: "back.out(1.7)",
      onUpdate: () => target.set(from.x, from.y, from.z),
    });
  }, []);

  // Procedural spin preset — float/entrance are handled by wrapping
  // components below since they need to control mount, not per-frame.
  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (animation === "spin" || animation === "float-spin") {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  const content = (
    <group ref={groupRef} rotation={rotation}>
      <Center scale={scale}>
        <primitive object={scene} />
      </Center>
    </group>
  );

  if (animation === "float" || animation === "float-spin") {
    return (
      <Float
        speed={1.6}
        rotationIntensity={0.25}
        floatIntensity={0.6}
        position={position}
      >
        {content}
      </Float>
    );
  }

  return <group position={position}>{content}</group>;
};

/**
 * Preloads a model so it's ready before the Canvas mounts it — call this
 * in a route/section that's about to show a model to avoid pop-in.
 */
export const preloadModel = (src: string) => useGLTF.preload(src);

export default Model3D;
