import appConfig from "@/packages/configs/app.config";
import ImageComponent from "./ImageComponent";

type NavigationLogoProps = {
  /** Override the default site logo — useful for a dark/light variant swap. */
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * The site logo, pre-wired to `appConfig.site` and linked to home — drop
 * straight into Header without passing src/alt/href every time.
 *
 * Default size (40) is tuned for a header/nav bar. Pass a larger explicit
 * `width`/`height` for contexts like the footer brand column.
 */
const NavigationLogo = ({
  src,
  width = 128,
  height = 128,
  className,
}: NavigationLogoProps) => (
  <ImageComponent
    id="navigation-logo"
    src={src ?? appConfig.site.logo}
    alt={`${appConfig.app.name} logo`}
    href={appConfig.routes.home}
    width={width}
    height={height}
    className={className}
    priority
  />
);

NavigationLogo.displayName = "NavigationLogo";

export default NavigationLogo;
