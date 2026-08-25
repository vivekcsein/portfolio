"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import {
  useNavigationActions,
  useNavigationState,
} from "@/components/providers/NavigationProvider";
import { Button } from "@/components/ui";
import { mainNav } from "@/packages/configs/navigation.config";
import { useHoverDropdown } from "@/packages/hooks/useHoverDropdown";
import { getAnimationStyle } from "@/packages/utils/animation";
import type { DropdownCategory, NavTab } from "@/types/navigation";

type NavItemProps = {
  tab: NavTab;
  activeId: string | null;
  onSelect: (id: string | null) => void;
};

const NavItem = memo(({ tab, activeId, onSelect }: NavItemProps) => {
  const pathname = usePathname();
  const hasDropdown = Boolean(tab.dropdown?.length);
  const { isActive, onMouseEnter, onMouseLeave } = useHoverDropdown({
    id: tab.id,
    activeId,
    onSelect,
  });

  // No dropdown for this tab -> it's just a destination. Render a plain Link,
  // skip the hover handlers and mega-dropdown markup entirely (nothing to
  // toggle, so no reason to touch the shared navigation store for this item),
  // and highlight it when it matches the current route.
  if (!hasDropdown) {
    const isCurrentRoute = tab.href !== undefined && pathname === tab.href;

    return (
      <li className="nav-item">
        <Link
          href={tab.href ?? "#"}
          className={`nav-btn ${isCurrentRoute ? "active" : ""}`}
        >
          {tab.title}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="nav-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Button
        variant="ghost"
        className={`nav-btn ${isActive ? "active" : ""}`}
        aria-haspopup="true"
        aria-expanded={isActive}
      >
        {tab.title}
        <span className="chevron-arrow" />
      </Button>

      {/* Content-Driven Dropdown Panel */}
      <div className={`mega-dropdown ${isActive ? "is-visible" : ""}`}>
        <div
          className="mega-dropdown-inner"
          // `getAnimationStyle` returns the full animationName/duration/
          // timing/fill set — a bare keyframe name via `{ animation: "zoomIn" }`
          // sets ONLY animation-name; duration defaults to 0s and it never
          // visibly plays. See packages/utils/animation.ts.
          style={getAnimationStyle("zoom", "bottom", { durationMs: 200 })}
        >
          {tab.dropdown?.map((subCat: DropdownCategory) => (
            <div key={subCat.category} className="dropdown-column">
              <h4 className="column-heading">{subCat.category}</h4>
              <ul className="column-links">
                {subCat.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="dropdown-link-item">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
});

NavItem.displayName = "NavItem";

const NavbarDesktop = () => {
  const activeDropdown = useNavigationState("activeDropdown");
  const { setActiveDropdown } = useNavigationActions();

  return (
    <nav className="desktop-nav">
      <ul className="nav-links-list">
        {mainNav.map((tab: NavTab) => (
          <NavItem
            key={tab.id}
            tab={tab}
            activeId={activeDropdown}
            onSelect={setActiveDropdown}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
