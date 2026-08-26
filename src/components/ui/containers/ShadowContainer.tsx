import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/packages/utils/cn";

const shadowContainerVariants = cva(
  [
    "relative rounded-xl",
    "border border-border",
    "bg-card text-card-foreground",

    // Smooth interaction
    "transition-all duration-300 ease-out",
    "will-change-transform",

    // Accessible focus
    "outline-none",
    "focus-within:ring-2",
    "focus-within:ring-ring/40",
    "focus-within:ring-offset-2",
    "focus-within:ring-offset-background",
  ],
  {
    variants: {
      variant: {
        // Default content/card surface
        default: [
          "shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
          "hover:-translate-y-0.5",
          "hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]",
        ],

        // Very subtle — useful for article lists
        subtle: [
          "shadow-[0_1px_4px_rgba(0,0,0,0.04)]",
          "hover:shadow-[0_6px_18px_rgba(0,0,0,0.07)]",
        ],

        // Standard article card
        card: [
          "shadow-[0_4px_14px_rgba(0,0,0,0.06)]",
          "hover:-translate-y-1",
          "hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)]",
        ],

        // Stronger elevation
        elevated: [
          "shadow-[0_8px_25px_rgba(0,0,0,0.08)]",
          "hover:-translate-y-1",
          "hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]",
        ],

        // Purple Sparkverse glow
        glow: [
          "border-primary/10",
          "shadow-[0_6px_25px_rgba(124,58,237,0.12)]",
          "hover:-translate-y-1",
          "hover:border-primary/20",
          "hover:shadow-[0_16px_40px_rgba(124,58,237,0.20)]",
        ],

        // Strong purple glow for featured content
        "glow-strong": [
          "border-primary/20",
          "shadow-[0_8px_30px_rgba(124,58,237,0.18)]",
          "hover:-translate-y-1",
          "hover:border-primary/30",
          "hover:shadow-[0_20px_50px_rgba(124,58,237,0.28)]",
        ],

        // Primary brand container
        primary: [
          "border-primary/20",
          "shadow-[0_6px_24px_rgba(124,58,237,0.14)]",
          "hover:-translate-y-1",
          "hover:shadow-[0_16px_40px_rgba(124,58,237,0.22)]",
        ],

        // No visible shadow
        flat: ["shadow-none", "hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)]"],

        // Floating UI such as menus/popovers
        floating: [
          "shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
          "hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)]",
        ],
      },

      hover: {
        true: [],
        false: ["hover:translate-y-0", "hover:shadow-inherit"],
      },
    },

    defaultVariants: {
      variant: "default",
      hover: true,
    },
  },
);

export interface ShadowContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shadowContainerVariants> {}

const ShadowContainer = forwardRef<HTMLDivElement, ShadowContainerProps>(
  ({ className, variant, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          shadowContainerVariants({
            variant,
            hover,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

ShadowContainer.displayName = "ShadowContainer";

export { ShadowContainer, shadowContainerVariants };
