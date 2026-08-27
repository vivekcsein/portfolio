import type { ReactNode } from "react";

interface StylishIconProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-14",
  md: "size-18",
  lg: "size-24",
};

const StylishIcon = ({
  children,
  className = "",
  size = "md",
}: StylishIconProps) => {
  return (
    <div
      className={`
        stylish-icon
        relative
        shrink-0
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {/* Outer ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-3
          rounded-full
          bg-primary/20
          opacity-70
          blur-xl
        "
      />

      {/* Outer boundary */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          border
          border-primary/35
          bg-primary/[0.035]
          shadow-[0_0_20px_hsl(var(--primary)/0.16)]
        "
      />

      {/* Inner boundary */}
      <div
        className="
          absolute
          inset-[3px]
          rounded-full
          border
          border-primary/20
          bg-primary/[0.055]
        "
      />

      {/* Radial light */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[5px]
          rounded-full
          bg-[radial-gradient(circle_at_35%_25%,hsl(var(--primary)/0.28),transparent_45%,hsl(var(--primary)/0.05)_100%)]
        "
      />

      {/* Top-left glass highlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-[13%]
          top-[9%]
          h-[32%]
          w-[42%]
          rotate-[-25deg]
          rounded-full
          bg-primary/15
          blur-[5px]
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          size-full
          items-center
          justify-center
          text-primary
          drop-shadow-[0_0_8px_hsl(var(--primary)/0.55)]
        "
      >
        {children}
      </div>
    </div>
  );
};

export default StylishIcon;
