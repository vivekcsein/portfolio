/**
 * Single source of truth for every GLB model used across the site.
 * Add a new entry here when your 3D designer hands you a new .glb —
 * nothing else should hardcode a model path, size, or position.
 *
 * Drop .glb files in /public/models/*.glb (served statically by Next.js).
 */

export type ModelAnimationPreset =
  | "none"
  | "float"
  | "spin"
  | "float-spin"
  | "entrance";

export interface ModelConfigItem {
  key: string;
  /** Path relative to /public, e.g. "/models/desk-setup.glb" */
  src: string;
  /** Target size in scene units — the component auto-scales the model's
   * bounding box to fit inside a cube of this size (largest axis = size). */
  size: number;
  /** [x, y, z] position offset after auto-centering. */
  position?: [number, number, number];
  /** [x, y, z] rotation in radians. */
  rotation?: [number, number, number];
  animation: ModelAnimationPreset;
  /** Play a named animation clip embedded in the GLB itself, if any. */
  clip?: string;
}

export const modelsConfig = {
  basePath: "/models",

  items: [
    {
      key: "hero-desk-setup",
      src: "/models/desk-setup.glb",
      size: 3,
      position: [0, -0.4, 0],
      animation: "float",
    },
    {
      key: "showcase-web-apps",
      src: "/models/web-apps.glb",
      size: 1.6,
      animation: "float-spin",
    },
    {
      key: "showcase-api-backend",
      src: "/models/api-backend.glb",
      size: 1.6,
      animation: "float-spin",
    },
    {
      key: "showcase-database",
      src: "/models/database.glb",
      size: 1.6,
      animation: "float-spin",
    },
    {
      key: "showcase-ar-experience",
      src: "/models/ar-experience.glb",
      size: 1.6,
      animation: "float-spin",
    },
  ],
} as const satisfies { basePath: string; items: ModelConfigItem[] };

export const getModelConfig = (key: string): ModelConfigItem | undefined =>
  modelsConfig.items.find((item) => item.key === key);

export default modelsConfig;
