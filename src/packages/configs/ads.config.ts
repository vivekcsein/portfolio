export type AdSlotSize = {
  width: number;
  height: number;
};

export type AdSlotDefinition = {
  id: string;
  /** Human label shown on the placeholder and used for future ad-network targeting. */
  label: string;
  size: AdSlotSize;
  /**
   * Real ad network unit id (e.g. AdSense ad slot ID) — leave empty until
   * a network is actually wired up. AdSlot renders the reserved
   * placeholder box whenever this is empty, and will mount the real ad
   * once it's filled in (see AdSlot.tsx).
   */
  networkSlotId?: string;
};

/**
 * Single source of truth for every ad placement on the site. Add a new
 * position here — a route just references it by `id` via <AdSlot slotId="..." />.
 */
export const adsConfig = {
  /** Set true once a real ad network (AdSense, etc.) is approved and wired in. */
  enabled: false,

  slots: {
    "content-rail-left": {
      id: "content-rail-left",
      label: "Advertisement",
      size: { width: 160, height: 600 }, // IAB "Wide Skyscraper"
    },
    "content-rail-right": {
      id: "content-rail-right",
      label: "Advertisement",
      size: { width: 160, height: 600 },
    },
  },
} satisfies {
  enabled: boolean;
  slots: Record<string, AdSlotDefinition>;
};

export const getAdSlot = (id: string): AdSlotDefinition | undefined =>
  adsConfig.slots[id as keyof typeof adsConfig.slots];

export default adsConfig;
