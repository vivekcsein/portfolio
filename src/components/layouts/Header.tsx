"use client";

import NavigationProvider, {
  useNavigationActions,
  useNavigationState,
} from "@/components/providers/NavigationProvider";
import appConfig from "@/packages/configs/app.config";
import NavbarDesktop from "../features/navigation/navbar/NavbarDesktop";
import NavbarDesktopAction from "../features/navigation/navbar/NavbarDesktopAction";
import NavbarMobile from "../features/navigation/navbar/NavbarMobile";
import Drawer from "../ui/drawer/Drawer";
import NavigationLogo from "../ui/images/NavigationLogo";

type HeaderProps = {
  sticky?: boolean;
};

/**
 * Split from `Header` because `useNavigationState`/`useNavigationActions`
 * need to run *inside* the `NavigationProvider` this file also creates —
 * a component can't consume a context it renders itself.
 */
const HeaderContent = ({ sticky }: HeaderProps) => {
  const mobileMenuOpen = useNavigationState("mobileMenuOpen");
  const { setMobileMenuOpen } = useNavigationActions();

  return (
    <header className={`header ${sticky ? "header-sticky" : ""}`}>
      <div className="header-main">
        <NavigationLogo src={appConfig.site.logo} />
        <NavbarDesktop />
        <NavbarDesktopAction />
      </div>

      {/* Backdrop — click outside the drawer to close it */}
      <button
        type="button"
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? "is-visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close navigation menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
      />

      <Drawer
        origin="right"
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        footer={null}
      >
        <NavbarMobile />
      </Drawer>
    </header>
  );
};

const Header = ({ sticky }: HeaderProps) => (
  <NavigationProvider>
    <HeaderContent sticky={sticky} />
  </NavigationProvider>
);

export default Header;
