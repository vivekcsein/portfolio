"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import Icon from "@/components/ui/icon/Icon";
import { homeConfig } from "@/packages/configs/home.config";

const SocialPanel = () => {
  const hero = homeConfig.hero;

  const containerRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const iconRefs = useRef<Array<SVGSVGElement | null>>([]);

  const REST_SCALE = 1;
  const FOCUS_SCALE = 1.35;
  const RECEDE_SCALE = 0.82;

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(itemRefs.current, {
        y: 18,
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.7,
        stagger: 0.08,
        ease: "back.out(1.7)",
        delay: 0.15,
      });
    },
    {
      scope: containerRef,
    },
  );

  const moveSpotlightTo = contextSafe((index: number) => {
    const target = itemRefs.current[index];
    const container = containerRef.current;
    const spotlight = spotlightRef.current;

    if (!target || !container || !spotlight) return;

    const targetRect = target.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const size = targetRect.width * 2.4;

    const x = targetRect.left - containerRect.left + targetRect.width / 2;

    gsap.to(spotlight, {
      x,
      y: targetRect.height / 2,
      width: size,
      height: size,
      autoAlpha: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.55)",
      overwrite: "auto",
    });
  });

  const showTooltip = contextSafe((index: number) => {
    const target = itemRefs.current[index];
    const tooltip = tooltipRef.current;

    if (!target || !tooltip) return;

    const label = hero.social[index]?.label;

    if (!label) return;

    tooltip.textContent = label;

    const targetRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const x = targetRect.left - containerRect.left + targetRect.width / 2;

    gsap.set(tooltip, {
      x,
      y: -8,
      xPercent: -50,
    });

    gsap.to(tooltip, {
      y: -12,
      autoAlpha: 1,
      scale: 1,
      duration: 0.25,
      ease: "back.out(1.8)",
    });
  });

  const hideTooltip = contextSafe(() => {
    const tooltip = tooltipRef.current;

    if (!tooltip) return;

    gsap.to(tooltip, {
      y: -4,
      autoAlpha: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  const hideSpotlight = contextSafe(() => {
    gsap.to(spotlightRef.current, {
      autoAlpha: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(iconRefs.current, {
      scale: REST_SCALE,
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });

    hideTooltip();
  });

  const handleEnter = contextSafe((index: number) => {
    moveSpotlightTo(index);
    showTooltip(index);

    iconRefs.current.forEach((el, i) => {
      if (!el) return;

      const distance = Math.abs(index - i);

      if (i === index) {
        gsap.to(el, {
          scale: FOCUS_SCALE,
          y: -2,
          rotate: -7,
          duration: 0.5,
          ease: "back.out(1.8)",
          overwrite: "auto",
        });

        return;
      }

      if (distance === 1) {
        gsap.to(el, {
          scale: 0.94,
          x: i < index ? -3 : 3,
          y: 1,
          rotate: i < index ? 2 : -2,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });

        return;
      }

      gsap.to(el, {
        scale: RECEDE_SCALE,
        x: 0,
        y: 2,
        rotate: 0,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  });

  const handleMove = contextSafe((event: React.PointerEvent<HTMLElement>) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((mouseX - centerX) / centerX) * 2;
    const rotateX = ((centerY - mouseY) / centerY) * 2;

    gsap.to(container, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power3.out",
      transformPerspective: 700,
      transformOrigin: "center",
      overwrite: "auto",
    });
  });

  const handlePointerLeave = contextSafe(() => {
    gsap.to(containerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });

    hideSpotlight();
  });

  return (
    <nav
      ref={containerRef}
      aria-label="Social links"
      onPointerMove={handleMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex items-center gap-3 px-2 transform-3d"
    >
      {/* Ambient spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 rounded-full bg-primary/20 opacity-0 blur-2xl"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 8px 35px hsl(var(--primary) / 0.28)",
        }}
      />

      {/* Tooltip */}
      <span
        ref={tooltipRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-30 rounded-md border border-border/50 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg backdrop-blur-md"
        style={{
          transform: "translate(-50%, -100%) scale(0.9)",
        }}
      />

      {hero.social.map((item, index) => (
        <Link
          key={item.label}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          href={item.href}
          aria-label={item.label}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          onPointerEnter={() => handleEnter(index)}
          className="group relative z-10 flex size-11 items-center justify-center rounded-xl"
        >
          {/* Icon glow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-1 rounded-xl bg-primary/0 blur-md transition-all duration-300 group-hover:bg-primary/20"
          />

          {/* Icon */}
          <Icon
            ref={(el) => {
              if (!el) return;
              iconRefs.current.push(el as SVGSVGElement);
            }}
            name={item.icon}
            className="relative z-10 size-5 text-muted-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-colors duration-300 group-hover:text-primary"
            style={{
              willChange: "transform",
              transformOrigin: "center",
            }}
          />

          {/* Bottom active indicator */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100"
          />
        </Link>
      ))}
    </nav>
  );
};

export default SocialPanel;
