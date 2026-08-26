import {
  AtSign,
  BookOpen,
  Box,
  Boxes,
  Calendar,
  CheckCircle2,
  Container,
  Database,
  Diamond,
  Flag,
  FlaskConical,
  Grid3x3,
  Layers,
  LayoutGrid,
  Link2,
  type LucideIcon,
  type LucideProps,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Rocket,
  Server,
  Share2,
  Shield,
  Sparkles,
  Target,
  Terminal,
  Trophy,
} from "lucide-react";

import {
  GithubBrandIcon,
  LinkedinBrandIcon,
  TwitterBrandIcon,
} from "./BrandIcons";

const BRAND_ICON_REGISTRY: Record<
  string,
  (props: LucideProps) => React.JSX.Element
> = {
  github: GithubBrandIcon,
  linkedin: LinkedinBrandIcon,
  twitter: TwitterBrandIcon,
};

export const ICON_REGISTRY: Record<string, LucideIcon> = {
  calendar: Calendar,
  check: CheckCircle2,
  pin: MapPin,
  mail: Mail,
  target: Target,
  at: AtSign,
  book: BookOpen,
  layout: LayoutGrid,
  server: Server,
  layers: Layers,
  share: Share2,
  flag: Flag,
  laptop: Monitor,
  sparkles: Sparkles,
  database: Database,
  grid: Grid3x3,
  shield: Shield,
  trophy: Trophy,
  code: Terminal,
  rocket: Rocket,
  boxes: Boxes,
  box: Box,
  flask: FlaskConical,
  container: Container,
  diamond: Diamond,
  sandbox: Link2,
  menu: Menu,
};

export type IconName = keyof typeof ICON_REGISTRY;

interface IconProps extends LucideProps {
  name: string;
}

/**
 * Central icon registry — resolve icons by string key instead of importing
 * lucide-react components directly in feature components.
 */
const Icon = ({ name, ...props }: IconProps) => {
  const BrandComponent = BRAND_ICON_REGISTRY[name];

  if (BrandComponent) {
    return <BrandComponent {...props} />;
  }

  const LucideComponent = ICON_REGISTRY[name] ?? Sparkles;

  return <LucideComponent {...props} />;
};

export default Icon;
