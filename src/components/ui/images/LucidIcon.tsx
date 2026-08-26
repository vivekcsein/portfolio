import "server-only";

import { icons } from "lucide-react";
import type { SVGProps } from "react";

export type LucideIconName = keyof typeof icons;

interface LucideIconProps extends SVGProps<SVGSVGElement> {
  iconName?: LucideIconName;
}

export default function LucideIcon({ iconName, ...props }: LucideIconProps) {
  if (!iconName) return null;

  const Icon = icons[iconName] as React.FC<SVGProps<SVGSVGElement>> | undefined;

  if (!Icon) return null;

  return <Icon {...props} />;
}
