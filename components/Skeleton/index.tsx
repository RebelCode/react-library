import React, {forwardRef} from "react";
import { classList } from "../../utils/classes";
import css from "./SkeletonMedia.pcss";

export type Props = React.ComponentPropsWithoutRef<"div">

export const Skeleton = forwardRef<HTMLDivElement, Props>(
  function Skeleton({className, ...props}, ref) {
    return <div ref={ref} {...props} className={classList(css.loading, className as string)} />
  },
)
