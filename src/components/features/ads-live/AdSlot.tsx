import { getAdSlot } from "@/packages/configs/ads.config";

import "@/styles/features/ads-live/ad-slot.css";

interface AdSlotProps {
  slotId: string;
  className?: string;
}

/**
 * Renders one ad placement, looked up by id from ads.config.ts. Until a
 * real ad network is wired in (`adsConfig.enabled` / a slot's
 * `networkSlotId`), this renders a clearly-labeled, correctly-sized
 * placeholder — never a fake ad image. Once a network is connected,
 * swap the placeholder branch below for that network's real mount
 * (e.g. an AdSense <ins class="adsbygoogle"> unit).
 */
const AdSlot = ({ slotId, className = "" }: AdSlotProps) => {
  const slot = getAdSlot(slotId);

  if (!slot) return null;

  return (
    <div
      className={`ad-slot ${className}`}
      style={{
        width: slot.size.width,
        height: slot.size.height,
      }}
      data-ad-slot-id={slot.id}
    >
      <span className="ad-slot-label">{slot.label}</span>
      <span className="ad-slot-size">
        {slot.size.width}×{slot.size.height}
      </span>
    </div>
  );
};

export default AdSlot;
