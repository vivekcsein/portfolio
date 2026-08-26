import type { CSSProperties, ReactNode } from "react";

interface AlignmentContainerProps {
  children: ReactNode;
  direction?: "vertical" | "horizontal" | "both";
  className?: string;
  style?: CSSProperties;
}

export const AlignmentContainer = ({
  children,
  direction = "both",
  className,
  style,
}: AlignmentContainerProps) => {
  const alignmentStyle: CSSProperties = {
    display: "flex",
    ...(direction === "horizontal" && {
      justifyContent: "center",
    }),
    ...(direction === "vertical" && {
      alignItems: "center",
    }),
    ...(direction === "both" && {
      alignItems: "center",
      justifyContent: "center",
    }),
    ...style,
  };

  return (
    <div className={className} style={alignmentStyle}>
      {children}
    </div>
  );
};
