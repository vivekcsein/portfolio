# Setting Up 3D Elements (GLB Models)

How to take a `.glb` file from your 3D designer and get it on the site —
correctly sized, positioned, and animated — without writing new
Three.js/R3F code every time.

## How it fits together

```
public/models/*.glb                 ← designer drops files here
src/packages/configs/models.config.ts  ← register each file: size, position, animation
src/components/features/models/
  Model3D.tsx          ← loads + auto-fits + animates ONE model (raw R3F component)
  ModelViewer.tsx       ← Canvas + lighting + a registered model, by key
  ClientModelViewer.tsx ← SSR-safe wrapper — use THIS one in pages/sections
```

You should almost never touch `Model3D.tsx`/`ModelViewer.tsx` day to day.
The normal workflow is: **drop the file → add one entry to
`models.config.ts` → drop `<ClientModelViewer modelKey="..." />` where you
want it.**

## 1. Getting the file from your designer

- Format: **`.glb`** (binary glTF — single file, textures embedded). Ask
  for `.glb`, not `.gltf` + separate texture folder.
- Keep triangle count reasonable for the web — a few thousand tris per
  model is plenty for anything that isn't a hero centerpiece.
- If the designer baked in an animation (idle spin, hover bob, etc.),
  ask them for the **exact clip name** — you'll need it for the `clip`
  field below.
- Drop the file in `public/models/your-model.glb`. It's now served at
  `/models/your-model.glb`.

## 2. Register it in `models.config.ts`

This file is the single source of truth for every model's size,
placement, and animation — nothing is hardcoded per-usage.

```ts
// src/packages/configs/models.config.ts
export const modelsConfig = {
  basePath: "/models",
  items: [
    {
      key: "showcase-web-apps", // ← you reference the model by this key
      src: "/models/web-apps.glb",
      size: 1.6, // scene units — see "Sizing" below
      position: [0, 0, 0], // optional offset after auto-centering
      rotation: [0, 0, 0], // optional, radians
      animation: "float-spin", // see "Animation presets" below
      clip: undefined, // set this if the GLB has a baked-in clip to play
    },
    // ...add your new model here
  ],
} as const;
```

## 3. Sizing & placement — how "size" works

You don't need to know or fix the scale your designer exported at.
`Model3D` measures the model's bounding box on load and uniformly scales
it so its **largest axis equals `size`** (in Three.js scene units), then
centers it. This means:

- A model exported at `10cm` and one exported at `10m` in Blender will
  both render at the same visual size on the page if you give them the
  same `size` value.
- To make one model consistently bigger/smaller than another, just change
  its `size` number — don't ask the designer to re-scale and re-export.
- `position`/`rotation` are applied **after** auto-centering, so they're
  small nudges (e.g. `[0, -0.4, 0]` to sit a desk model slightly lower),
  not full placement math.

**Picking a `size` value** — rule of thumb for this project's camera
setup (`fov: 40`, camera ~5 units back):

| Use case                           | Suggested `size` |
| ---------------------------------- | ---------------- |
| Small showcase tile (grid of 4)    | `1.4 – 1.8`      |
| Section hero (like the desk scene) | `2.5 – 3.5`      |
| Full-bleed/background centerpiece  | `4+`             |

## 4. Animation presets

Set the `animation` field per model in the config:

| Preset         | What it does                                                    |
| -------------- | --------------------------------------------------------------- |
| `"none"`       | Static, no motion.                                              |
| `"float"`      | Gentle up/down drift + slight rotation (drei's `<Float>`).      |
| `"spin"`       | Continuous slow Y-axis rotation.                                |
| `"float-spin"` | Float **and** spin together — default for showcase tiles.       |
| `"entrance"`   | One-time GSAP "pop in" (scale 0 → 1, `back.out` ease) on mount. |

If the GLB itself has a **baked-in animation clip** (something the
designer keyframed in Blender — an idle loop, a door opening, etc.), set
`clip: "ClipNameFromBlender"`. This plays independently of the
`animation` preset — you can have `animation: "float"` _and_ `clip:
"Idle"` running at the same time.

> Don't know the clip name? Load the model once with no `clip` set and
> log `console.log(animations.map(a => a.name))` — see `useGLTF` in
> `Model3D.tsx` (the `animations` array comes straight from the GLB).

## 5. Placing it on a page

Always import the **`ClientModelViewer`**, not `ModelViewer` directly —
`ModelViewer` renders an R3F `<Canvas>`, which cannot be server-rendered.
`ClientModelViewer` wraps it in `next/dynamic({ ssr: false })` for you.

```tsx
import ClientModelViewer from "@/components/features/models/ClientModelViewer";

const ShowcaseCard = () => (
  <div className="aspect-square rounded-3xl border border-border">
    <ClientModelViewer modelKey="showcase-web-apps" className="h-full w-full" />
  </div>
);
```

- `modelKey` — the `key` you gave it in `models.config.ts`.
- `className` — sizing/layout is entirely up to the parent container;
  the viewer fills `100%` of its parent's width/height. Always give the
  parent an explicit height (a fixed height, `aspect-square`, etc.) —
  Canvas has no intrinsic size.
- `interactive` (optional, default `false`) — set `interactive` to allow
  visitors to drag-orbit the model. Leave this off for decorative/grid
  tiles; only turn it on for a dedicated "explore this model" view.

```tsx
<ClientModelViewer modelKey="hero-desk-setup" className="h-120" interactive />
```

## 6. Combining with scroll animation

`ClientModelViewer` only handles the model's _own_ motion (float/spin/
entrance). To also have the whole viewer fade/slide in as the visitor
scrolls to it, wrap it in the project's existing `<Reveal>` component
(GSAP ScrollTrigger — see `src/components/ui/reveal/Reveal.tsx`):

```tsx
import Reveal from "@/components/ui/reveal/Reveal";
import ClientModelViewer from "@/components/features/models/ClientModelViewer";

<Reveal direction="up" className="h-72">
  <ClientModelViewer modelKey="showcase-database" className="h-full w-full" />
</Reveal>;
```

## 7. Performance notes

- Each model is lazy-loaded on the client and code-split from the main
  bundle — pages with no 3D content pay nothing extra.
- Prefer `"float"`/`"spin"` (cheap, per-frame transform only) over
  `clip` playback for simple decorative motion — reserve baked clips for
  motion that's genuinely hard to fake procedurally (mechanical parts,
  character rigs).
- If you have many tiles on one page (e.g. a 4-up showcase grid), keep
  `size` modest (1.4–1.8) and skip `interactive` — four separate
  `OrbitControls` instances is unnecessary GPU/JS overhead.
- Call `preloadModel("/models/your-model.glb")` (exported from
  `Model3D.tsx`) ahead of a route/section transition if you want to avoid
  pop-in on first view.

## Troubleshooting

| Symptom                                        | Likely cause                                                                                                                                                                                                                 |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Model doesn't appear, no error                 | Wrong `key` passed to `modelKey`, or `src` path doesn't match the file in `public/models/`. Check the browser console — `ModelViewer` warns on a missing config key.                                                         |
| Model appears tiny or huge                     | `size` too small/large for this model's proportions — adjust the number, not the GLB.                                                                                                                                        |
| Model appears off-center                       | Something in the GLB has a large offset baked in — auto-centering handles the mesh bounding box, but double check the designer didn't leave a stray empty/light far from origin (it gets included in the bounding-box calc). |
| `clip` doesn't play                            | Clip name typo — log `animations.map(a => a.name)` to confirm the exact string.                                                                                                                                              |
| Hydration/SSR error mentioning `WebGLRenderer` | You imported `ModelViewer` directly instead of `ClientModelViewer`.                                                                                                                                                          |
