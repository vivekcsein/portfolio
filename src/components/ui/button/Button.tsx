import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";

import { cn } from "@/packages/utils/cn";

/* ==========================================================================
   Variants
   ========================================================================== */

const buttonVariants = cva(
  [
    "group relative inline-flex items-center justify-center",
    "gap-2 whitespace-nowrap",
    "font-sans text-sm font-medium leading-tight",
    "outline-none select-none",
    "cursor-pointer disabled:cursor-not-allowed",
    "transition-all duration-300 ease-out",
    "will-change-transform",

    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",

    "disabled:pointer-events-none disabled:opacity-50",

    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg]:size-4",
    "[&_svg]:transition-transform",
    "[&_svg]:duration-300",
  ],
  {
    variants: {
      variant: {
        // Main Sparkverse CTA — purple gradient, the site's primary action color
        primary: [
          "border border-transparent",
          "text-primary-foreground",

          "bg-linear-to-r from-violet-600 via-purple-600 to-indigo-500",
          "bg-size-[200%_100%] bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(124,58,237,0.25)]",

          "hover:-translate-y-0.5",
          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:shadow-[0_3px_10px_rgba(124,58,237,0.25)]",
        ],

        // Flat single-color button
        secondary: [
          "border border-transparent",
          "bg-primary text-primary-foreground",
          "shadow-sm",

          "hover:-translate-y-0.5",
          "hover:bg-primary/90",
          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.25)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-primary/95",
        ],

        outline: [
          "border border-border",
          "bg-transparent text-foreground",

          "hover:-translate-y-0.5",
          "hover:border-primary/50",
          "hover:bg-primary/5",
          "hover:text-primary",
          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.10)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-primary/10",
        ],

        ghost: [
          "border border-transparent",
          "bg-transparent text-foreground",

          "hover:-translate-y-0.5",
          "hover:bg-accent",
          "hover:text-accent-foreground",
          "hover:shadow-[0_6px_18px_rgba(124,58,237,0.08)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-accent/80",
        ],

        soft: [
          "border border-primary/10",
          "bg-primary/10 text-primary",

          "hover:-translate-y-0.5",
          "hover:border-primary/20",
          "hover:bg-primary/15",
          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.15)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-primary/20",
        ],

        destructive: [
          "border border-transparent",
          "text-white",

          "bg-linear-to-r from-red-600 via-rose-600 to-red-500",
          "bg-size-[200%_100%] bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(225,29,72,0.20)]",

          "hover:-translate-y-0.5",
          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(225,29,72,0.30)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
        ],

        success: [
          "border border-transparent",
          "text-white",

          "bg-linear-to-r from-emerald-600 via-green-600 to-teal-500",
          "bg-size-[200%_100%] bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(5,150,105,0.20)]",

          "hover:-translate-y-0.5",
          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(5,150,105,0.30)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
        ],

        warning: [
          "border border-transparent",
          "text-white",

          "bg-linear-to-r from-amber-500 via-orange-500 to-yellow-500",
          "bg-size-[200%_100%] bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(245,158,11,0.20)]",

          "hover:-translate-y-0.5",
          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(245,158,11,0.30)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
        ],

        // Text link, underline animates in from a direction
        link: [
          "h-auto p-0",
          "text-primary",
          "after:absolute after:-bottom-0.5 after:h-0.5 after:w-0",
          "after:bg-current after:transition-all after:duration-300 after:ease-out",
          "hover:text-primary/80",
          "shadow-none",
        ],

        link_secondary: [
          "bg-transparent text-foreground",

          "hover:-translate-y-0.5",
          "hover:bg-accent",
          "hover:text-accent-foreground",
          "hover:shadow-[0_6px_18px_rgba(124,58,237,0.08)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-accent/80",
        ],
      },

      direction: {
        left: ["after:left-0", "hover:after:w-full"],
        right: ["after:right-0", "hover:after:w-full"],
        center: ["after:left-1/2 after:-translate-x-1/2", "hover:after:w-full"],
      },

      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-4 rounded-lg",
        lg: "h-11 px-5 rounded-lg",
        xl: "h-12 px-6 text-base rounded-lg",
        icon: "size-10 rounded-lg p-0",
        "icon-sm": "size-8 rounded-md p-0",
        "icon-lg": "size-11 rounded-lg p-0",
      },
    },

    compoundVariants: [
      {
        variant: [
          "primary",
          "secondary",
          "outline",
          "ghost",
          "soft",
          "destructive",
          "success",
          "warning",
        ],
        className: "after:hidden",
      },
      {
        variant: "link",
        className: "h-auto w-auto rounded-none px-0 py-0",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const shineVariants = new Set([
  "primary",
  "secondary",
  "outline",
  "ghost",
  "soft",
  "destructive",
  "success",
  "warning",
]);

/* ==========================================================================
   Component
   ========================================================================== */

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
  /** Text shown in place of `children` while `loading` is true. Falls back to `children` if omitted. */
  loadingText?: string;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      direction = "center",
      size,
      icon: Icon,
      iconPosition = "right",
      loading = false,
      loadingText,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isLink = variant === "link";
    const hasShine = variant ? shineVariants.has(variant) : false;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            size: isLink ? undefined : size,
            direction: isLink ? direction : undefined,
          }),
          className,
        )}
        {...props}
      >
        {hasShine && (
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 overflow-hidden",
              "rounded-[inherit]",
              "opacity-0 transition-opacity duration-300",
              "group-hover:opacity-100",
            )}
          >
            <span
              className={cn(
                "absolute inset-y-0 -left-full w-1/2",
                "skew-x-[-20deg]",
                "bg-linear-to-r from-transparent via-white/20 to-transparent",
                "transition-transform duration-700",
                "group-hover:translate-x-[300%]",
              )}
            />
          </span>
        )}

        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {loading ? (
            <Loader2 aria-hidden="true" className="animate-spin" />
          ) : (
            Icon && iconPosition === "left" && <Icon aria-hidden="true" />
          )}

          {(loading ? (loadingText ?? children) : children) && (
            <span>{loading ? (loadingText ?? children) : children}</span>
          )}

          {!loading && Icon && iconPosition === "right" && (
            <Icon aria-hidden="true" className="group-hover:translate-x-0.5" />
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
