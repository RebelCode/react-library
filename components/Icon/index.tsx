import React, {forwardRef, ReactNode} from "react"

type BaseProps = Omit<React.SVGProps<SVGSVGElement>, "children">;

type Props = BaseProps & {
  icon: ReactNode;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  style?: object;
  std?: boolean;
};

export const Icon = forwardRef<SVGSVGElement, Props>(
  ({ icon, std, viewBox, ...props }, ref) => (
    <svg ref={ref} viewBox={viewBox ?? (std ? "0 0 30 30" : null) ?? "0 0 20 20"} fill="currentColor" {...props}>
      <g>{icon}</g>
    </svg>
  )
);
