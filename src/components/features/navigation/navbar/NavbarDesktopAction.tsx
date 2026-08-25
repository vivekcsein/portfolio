"use client";

import ThemeToggle from "@/components/layouts/ThemeToggle";
import {
  useNavigationActions,
  useNavigationState,
} from "@/components/providers/NavigationProvider";
import { Button } from "@/components/ui";

const NavbarDesktopAction = () => {
  const mobileMenuOpen = useNavigationState("mobileMenuOpen");
  const { toggleMobileMenu } = useNavigationActions();

  return (
    <div className="header-actions">
      <ThemeToggle />

      {/* Mobile Menu Toggle Burger Button */}
      <Button
        className={`mobile-toggle-btn ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
        variant="ghost"
      >
        <span />
        <span />
        <span />
      </Button>
    </div>
  );
};

export default NavbarDesktopAction;
