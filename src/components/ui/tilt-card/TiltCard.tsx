"use client";

import { useRef } from "react";

import "./tilt-card.css";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

/**
 * Lightweight CSS-only 3D tilt effect driven by pointer position.
 * No WebGL — just `transform: perspective(...) rotateX/rotateY`.
 */
const TiltCard = ({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      card.style.setProperty("--tilt-x", `${rotateX}deg`);
      card.style.setProperty("--tilt-y", `${rotateY}deg`);
      card.style.setProperty("--glare-x", `${px * 100}%`);
      card.style.setProperty("--glare-y", `${py * 100}%`);
    });
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="tilt-card-inner">
        {children}
        {glare && <span className="tilt-card-glare" aria-hidden="true" />}
      </div>
    </div>
  );
};

export default TiltCard;
