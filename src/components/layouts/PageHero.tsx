import Link from "next/link";
import type { ReactNode } from "react";
import appConfig from "@/packages/configs/app.config";

interface PageHeroProps {
  badge: string;
  title: string;
  description?: string;
  /** Defaults to a link back Home. Pass `false` to hide entirely. */
  backHref?: string | false;
  backLabel?: string;
  children?: ReactNode;
}

/**
 * Shared page shell — same visual system (content-page/content-hero/
 * content-badge/etc., defined in styles/ui/content.css) that /docs and
 * /projects category pages already use. Wrap any new top-level page
 * (About, Services, Contact, ...) in this so the site has one consistent
 * "page header" look instead of each route inventing its own.
 *
 * @example
 * <PageHero badge="About" title="About Me" description="...">
 *   <SomeSectionBelowTheHero />
 * </PageHero>
 */
const PageHero = ({
  badge,
  title,
  description,
  backHref = appConfig.routes.home,
  backLabel = "Back to Home",
  children,
}: PageHeroProps) => {
  return (
    <main className="content-page">
      <div className="content-background" aria-hidden="true">
        <div className="content-glow content-glow-primary" />
        <div className="content-glow content-glow-secondary" />
        <div className="content-grid-pattern" />
      </div>

      <div className="content-container">
        {backHref !== false && (
          <nav className="content-navigation">
            <Link href={backHref} className="content-back-link">
              <span aria-hidden="true">←</span>
              <span>{backLabel}</span>
            </Link>
          </nav>
        )}

        <header className="content-hero">
          <div className="content-badge">
            <span className="content-badge-dot" />
            <span>{badge}</span>
          </div>

          <h1 className="content-title">{title}</h1>

          {description && <p className="content-description">{description}</p>}
        </header>

        {children}
      </div>
    </main>
  );
};

export default PageHero;
