"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import KeywordsButtons from "@/components/ui/keywords/KeywordsCopy";
import type { ContentItem } from "@/packages/utils/content-normlize";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ContentTimelineProps {
  /** Full section heading, e.g. "Development documentation" or "Full-Stack Products". Rendered as-is — no suffix is appended. */
  heading: string;
  /** Small label above the heading. Defaults to "Explore". */
  eyebrow?: string;
  contentList: ContentItem[];
}

const ContentTimeline = ({
  heading,
  eyebrow = "Explore",
  contentList,
}: ContentTimelineProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Draw the spine as the section scrolls into view
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
            end: "bottom 20%",
            scrub: 0.6,
          },
        },
      );

      const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");

      cards.forEach((card, index) => {
        const fromLeft = index % 2 === 0;
        const dot = card.querySelector(".timeline-dot");

        gsap.fromTo(
          card,
          { autoAlpha: 0, x: fromLeft ? -60 : 60, y: 24 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.4,
              ease: "back.out(3)",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    },
    { scope: rootRef, dependencies: [contentList] },
  );

  return (
    <section
      className="timeline-section"
      aria-labelledby="content-heading"
      ref={rootRef}
    >
      <div className="content-section-header">
        <div>
          <p className="content-eyebrow">{eyebrow}</p>
          <h2 id="content-heading">{heading}</h2>
        </div>
        <span className="content-count">
          {String(contentList.length).padStart(2, "0")}
        </span>
      </div>

      <div className="timeline-track">
        <div className="timeline-spine" ref={lineRef} />

        {contentList.map((child, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <div
              key={child.key}
              className={`timeline-row ${fromLeft ? "timeline-row-left" : "timeline-row-right"}`}
            >
              <Link
                href={child.href}
                target={child.external ? "_blank" : undefined}
                rel={child.external ? "noreferrer" : undefined}
                className="timeline-card content-card"
              >
                <div className="content-card-content">
                  <div className="content-card-top">
                    <div className="content-card-number">
                      {String(index + 1).padStart(2, "0")} • updated on{" "}
                      <span>{child.updatedAt}</span>
                    </div>
                    <span className="content-card-arrow" aria-hidden="true">
                      {child.external ? "↗" : "→"}
                    </span>
                  </div>

                  <div className="content-card-body">
                    <h3>{child.title}</h3>
                    {child.description && <p>{child.description}</p>}
                    {child.keywords && (
                      <KeywordsButtons keywords={child.keywords} />
                    )}
                  </div>

                  <div className="content-card-footer">
                    <span>
                      {child.external ? "View repository" : "Read guide"}
                    </span>
                    <span aria-hidden="true">{child.external ? "↗" : "→"}</span>
                  </div>
                </div>
              </Link>

              <span className="timeline-dot" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentTimeline;
