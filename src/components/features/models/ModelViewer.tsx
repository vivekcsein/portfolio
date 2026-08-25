"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { getModelConfig } from "@/packages/configs/models.config";

import Model3D from "./Model3D";
import "./model-viewer.css";

interface ModelViewerProps {
  /** Key from models.config.ts — the single source of truth for path/size/animation. */
  modelKey: string;
  className?: string;
  /** Enable pointer-drag orbit. Off by default for decorative/background models. */
  interactive?: boolean;
}

/**
 * Drop-in <Canvas> + lighting + a registered model. This is what you place
 * in a section — it reads size/position/animation from models.config.ts
 * so nothing is hardcoded per-usage.
 *
 * @example
 * <ModelViewer modelKey="showcase-web-apps" className="h-64 w-full" />
 */
const ModelViewer = ({
  modelKey,
  className = "",
  interactive = false,
}: ModelViewerProps) => {
  const config = getModelConfig(modelKey);

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[ModelViewer] No model registered for key "${modelKey}" in models.config.ts`,
      );
    }

    return null;
  }

  return (
    <div className={`model-viewer ${className}`}>
      <Canvas
        camera={{ position: [0, 0.4, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[4, 4, 4]} intensity={30} />
          <pointLight position={[-4, -2, -3]} intensity={18} color="#a78bfa" />

          <Model3D
            src={config.src}
            size={config.size}
            position={config.position}
            rotation={config.rotation}
            animation={config.animation}
            clip={config.clip}
          />

          <Environment preset="city" />
          {interactive && (
            <OrbitControls enableZoom={false} enablePan={false} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
