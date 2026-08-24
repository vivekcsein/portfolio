import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, forwardRef, type ReactNode } from "react";

import { cn } from "@/packages/utils/cn";

const linkVariants = cva(
  [
    "group relative inline-flex items-center justify-center",
    "gap-2 whitespace-nowrap",
    "font-sans text-sm font-medium",
    "outline-none select-none",
    "transition-all duration-300 ease-out",
    "will-change-transform",

    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",

    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg]:size-4",
    "[&_svg]:transition-transform",
    "[&_svg]:duration-300",
  ],
  {
    variants: {
      variant: {
        // Normal content link
        default: [
          "text-foreground",
          "underline-offset-4",

          "hover:text-primary",
          "hover:underline",
        ],

        // Sparkverse primary text link
        primary: [
          "text-primary",
          "underline-offset-4",

          "hover:text-primary/80",
          "hover:underline",
        ],

        // Muted / secondary content link
        secondary: [
          "text-muted-foreground",
          "underline-offset-4",

          "hover:text-foreground",
          "hover:underline",
        ],

        // Primary gradient button-style link
        button: [
          "h-10 px-4",
          "rounded-lg",
          "border border-transparent",

          "text-primary-foreground",

          "bg-linear-to-r",
          "from-violet-600",
          "via-purple-600",
          "to-indigo-500",

          "bg-size-[200%_100%]",
          "bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(124,58,237,0.25)]",

          "hover:-translate-y-0.5",
          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:shadow-[0_3px_10px_rgba(124,58,237,0.25)]",
        ],

        // Secondary button-style link
        "button-secondary": [
          "h-10 px-4",
          "rounded-lg",
          "border border-border",

          "bg-background",
          "text-foreground",
          "shadow-sm",

          "hover:-translate-y-0.5",
          "hover:border-primary/40",
          "hover:bg-primary/5",
          "hover:text-primary",
          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.12)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-primary/10",
        ],

        // Outline button-style link
        outline: [
          "h-10 px-4",
          "rounded-lg",
          "border border-border",

          "bg-transparent",
          "text-foreground",

          "hover:-translate-y-0.5",
          "hover:border-primary/50",
          "hover:bg-primary/5",
          "hover:text-primary",
          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.10)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-primary/10",
        ],

        // Ghost button-style link
        ghost: [
          "h-10 px-4",
          "rounded-lg",
          "border border-transparent",

          "text-foreground",

          "hover:-translate-y-0.5",
          "hover:bg-accent",
          "hover:text-accent-foreground",
          "hover:shadow-[0_6px_18px_rgba(124,58,237,0.08)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-accent/80",
        ],

        // Soft purple button-style link
        soft: [
          "h-10 px-4",
          "rounded-lg",
          "border border-primary/10",

          "bg-primary/10",
          "text-primary",

          "hover:-translate-y-0.5",
          "hover:border-primary/20",
          "hover:bg-primary/15",
          "hover:shadow-[0_8px_22px_rgba(124,58,237,0.15)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
          "active:bg-primary/20",
        ],

        // Destructive button-style link
        destructive: [
          "h-10 px-4",
          "rounded-lg",
          "border border-transparent",

          "text-white",

          "bg-linear-to-r",
          "from-red-600",
          "via-rose-600",
          "to-red-500",

          "bg-size-[200%_100%]",
          "bg-position-[0%_50%]",

          "shadow-[0_4px_14px_rgba(225,29,72,0.20)]",

          "hover:-translate-y-0.5",
          "hover:bg-position-[100%_50%]",
          "hover:shadow-[0_8px_24px_rgba(225,29,72,0.30)]",

          "active:translate-y-0",
          "active:scale-[0.97]",
        ],
      },

      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4",
        lg: "h-11 px-5",
        xl: "h-12 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface AppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps,
    VariantProps<typeof linkVariants> {
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  (
    {
      className,
      variant,
      size,
      icon: Icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        className={cn(
          linkVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {/* Animated shine for button variants */}
        {variant &&
          [
            "button",
            "button-secondary",
            "outline",
            "ghost",
            "soft",
            "destructive",
          ].includes(variant) && (
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
                  "bg-linear-to-r",
                  "from-transparent",
                  "via-white/20",
                  "to-transparent",
                  "transition-transform duration-700",
                  "group-hover:translate-x-[300%]",
                )}
              />
            </span>
          )}

        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {Icon && iconPosition === "left" && <Icon aria-hidden="true" />}

          <span>{children}</span>

          {Icon && iconPosition === "right" && (
            <Icon aria-hidden="true" className="group-hover:translate-x-0.5" />
          )}
        </span>
      </Link>
    );
  },
);

AppLink.displayName = "AppLink";

export { AppLink, linkVariants };
