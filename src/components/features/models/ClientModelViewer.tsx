"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
  loading: () => <div className="model-viewer-fallback" aria-hidden="true" />,
});

/**
 * Use this in any Server Component / page instead of importing
 * ModelViewer directly — react-three-fiber's Canvas cannot be
 * server-rendered, so this defers it to the client and shows a
 * placeholder while the model + Three.js chunk load.
 *
 * @example
 * import ClientModelViewer from "@/components/features/models/ClientModelViewer";
 * <ClientModelViewer modelKey="hero-desk-setup" className="h-[480px]" />
 */
export default ModelViewer;
