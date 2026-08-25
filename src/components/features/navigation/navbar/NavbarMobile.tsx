"use client";

import { memo, useCallback } from "react";
import {
  useNavigationActions,
  useNavigationState,
} from "@/components/providers/NavigationProvider";
import { Button, Link } from "@/components/ui";
import { mainNav } from "@/packages/configs/navigation.config";
import type { NavTab } from "@/types/navigation";

type MobileAccordionSectionProps = {
  tab: NavTab;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  onLinkClick: () => void;
};

const MobileAccordionSection = memo(
  ({ tab, isExpanded, onToggle, onLinkClick }: MobileAccordionSectionProps) => {
    const handleToggle = useCallback(
      () => onToggle(tab.id),
      [onToggle, tab.id],
    );

    // Simple navigation item
    if (!tab.dropdown?.length) {
      return (
        <Link
          variant="secondary"
          href={tab.href ?? "#"}
          className="mobile-accordion-trigger"
          onClick={onLinkClick}
        >
          {tab.title}
        </Link>
      );
    }

    return (
      <div className="mobile-accordion-section">
        <Button
          className={`mobile-accordion-trigger ${isExpanded ? "expanded" : ""}`}
          onClick={handleToggle}
          aria-expanded={isExpanded}
          variant="ghost"
        >
          {tab.title}
          <span className="chevron-arrow" />
        </Button>

        <div
          className={`mobile-accordion-content ${isExpanded ? "expanded-content" : ""}`}
        >
          {tab.dropdown.map((category) => (
            <div key={category.category} className="mobile-subcat">
              <div className="mobile-subcat-title">{category.category}</div>

              <ul className="mobile-subcat-links">
                {category.items.map((item) => (
                  <li key={item.href} className="mobile-link-item">
                    <Link
                      href={item.href}
                      onClick={onLinkClick}
                      variant="secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

MobileAccordionSection.displayName = "MobileAccordionSection";

const NavbarMobile = () => {
  const activeMobileCategory = useNavigationState("activeMobileCategory");
  const { toggleMobileCategory, setMobileMenuOpen } = useNavigationActions();

  const handleLinkClick = useCallback(
    () => setMobileMenuOpen(false),
    [setMobileMenuOpen],
  );

  return (
    <nav className="mobile-drawer-body">
      {mainNav.map((tab: NavTab) => (
        <MobileAccordionSection
          key={tab.id}
          tab={tab}
          isExpanded={activeMobileCategory === tab.id}
          onToggle={toggleMobileCategory}
          onLinkClick={handleLinkClick}
        />
      ))}
    </nav>
  );
};

export default NavbarMobile;
