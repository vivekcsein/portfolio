import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";

import { cn } from "@/packages/utils/cn";

const buttonVariants = cva(
  [
    // Layout
    "group relative inline-flex items-center justify-center gap-2",
    "whitespace-nowrap overflow-hidden rounded-lg",

    // Typography
    "font-sans text-sm font-medium",

    // Interaction
    "select-none outline-none",
    "transition-all duration-300 ease-out",
    "will-change-transform",

    // Focus
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",

    // Disabled
    "disabled:pointer-events-none disabled:opacity-50",

    // SVG
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg]:size-4",

    // Universal hover animation
    "hover:-translate-y-0.5",

    // Universal press animation
    "active:translate-y-0",
    "active:scale-[0.97]",

    // Universal icon animation
    "[&_svg]:transition-transform",
    "[&_svg]:duration-300",
    "hover:[&_svg]:scale-105",

    // cursor
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        // Main Sparkverse CTA
        primary: [
          "border border-transparent",
          "text-primary-foreground",

          // Purple gradient
          "bg-linear-to-r",
          "from-violet-600",
          "via-purple-600",
          "to-indigo-500",
          "bg-size-[200%_100%]",
          "bg-position-[0%_50%]",

          // Shadow
          "shadow-[0_4px_14px_rgba(124,58,237,0.25)]",

          // Gradient movement
          "hover:bg-position-[100%_50%]",

          // Hover shadow
          "hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)]",

          // Active
          "active:shadow-[0_3px_10px_rgba(124,58,237,0.25)]",
        ],

        // Screenshot-style secondary button
        secondary: [
          "border border-border",
          "bg-background",
          "text-foreground",
          "shadow-sm",

          "hover:border-primary/40",
          "hover:bg-primary/5",
          "hover:text-primary",

          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.12)]",

          "active:bg-primary/10",
        ],

        // Bordered action
        outline: [
          "border border-border",
          "bg-transparent",
          "text-foreground",

          "hover:border-primary/50",
          "hover:bg-primary/5",
          "hover:text-primary",

          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.10)]",

          "active:bg-primary/10",
        ],

        // Navigation / low-emphasis action
        ghost: [
          "border border-transparent",
          "bg-transparent",
          "text-foreground",

          "hover:bg-accent",
          "hover:text-accent-foreground",

          "hover:shadow-[0_6px_18px_rgba(124,58,237,0.08)]",

          "active:bg-accent/80",
        ],

        // Text action
        link: [
          "h-auto",
          "rounded-none",
          "border-0",
          "bg-transparent",
          "px-0",
          "py-0",

          "text-primary",
          "underline-offset-4",

          "hover:translate-y-0",
          "hover:underline",

          "active:scale-100",
        ],

        // Soft Sparkverse purple
        soft: [
          "border border-primary/10",
          "bg-primary/10",
          "text-primary",

          "hover:border-primary/20",
          "hover:bg-primary/15",

          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.15)]",

          "active:bg-primary/20",
        ],

        // Destructive action
        destructive: [
          "border border-transparent",
          "text-white",

          "bg-linear-to-r",
          "from-red-600",
          "via-rose-600",
          "to-red-500",
          "bg-size-[200%_100%]",
          "bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(225,29,72,0.20)]",

          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(225,29,72,0.30)]",

          "active:shadow-[0_3px_10px_rgba(225,29,72,0.20)]",
        ],

        // Positive action
        success: [
          "border border-transparent",
          "text-white",

          "bg-linear-to-r",
          "from-emerald-600",
          "via-green-600",
          "to-teal-500",
          "bg-size-[200%_100%]",
          "bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(5,150,105,0.20)]",

          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(5,150,105,0.30)]",

          "active:shadow-[0_3px_10px_rgba(5,150,105,0.20)]",
        ],

        // Warning action
        warning: [
          "border border-transparent",
          "text-white",

          "bg-linear-to-r",
          "from-amber-500",
          "via-orange-500",
          "to-yellow-500",
          "bg-size-[200%_100%]",
          "bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(245,158,11,0.20)]",

          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(245,158,11,0.30)]",

          "active:shadow-[0_3px_10px_rgba(245,158,11,0.20)]",
        ],
      },

      size: {
        sm: ["h-8", "rounded-md", "px-3", "text-xs"],

        default: ["h-10", "px-4"],

        lg: ["h-11", "px-5"],

        xl: ["h-12", "px-6", "text-base"],

        icon: ["size-10", "px-0"],

        "icon-sm": ["size-8", "rounded-md", "px-0"],

        "icon-lg": ["size-11", "px-0"],
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
  loadingText?: string;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      icon: Icon,
      iconPosition = "left",
      loading = false,
      loadingText,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {/* Universal shine animation */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0",
            "-translate-x-full",
            "bg-linear-to-r",
            "from-transparent",
            "via-white/20",
            "to-transparent",
            "skew-x-[-20deg]",
            "transition-transform duration-700 ease-out",
            "group-hover:translate-x-full",
          )}
        />

        {/* Button content */}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {loading ? (
            <>
              <LoaderCircle
                className="size-4 animate-spin"
                aria-hidden="true"
              />

              {loadingText ?? children}
            </>
          ) : (
            <>
              {Icon && iconPosition === "left" && <Icon aria-hidden="true" />}

              <span>{children}</span>

              {Icon && iconPosition === "right" && <Icon aria-hidden="true" />}
            </>
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
