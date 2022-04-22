import React, {forwardRef, ReactElement} from "react"

type BaseProps = Omit<React.SVGProps<SVGSVGElement>, "children">;

type Props = BaseProps & {
  icon: ReactElement;
  width?: string;
  height?: string;
  viewBox?: string;
  size?: number | string;
};

const defaultViewBox = "0 0 30 30"

export const Icon = forwardRef<SVGSVGElement, Props>(
  ({icon, viewBox = defaultViewBox, size = 30, ...props}, ref) => {
    props.width = props.width ?? size?.toString()
    props.height = props.height ?? size?.toString()

    return (
      <svg ref={ref} viewBox={viewBox} fill="currentColor" {...props}>
        <g>{icon}</g>
      </svg>
    )
  },
)
