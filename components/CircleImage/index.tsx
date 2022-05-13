import React, {forwardRef} from "react"
import css from "./CircleImage.pcss"

export type Props = React.HTMLProps<HTMLImageElement> & {
    crossOrigin?: "" | "anonymous" | "use-credentials"
}

export const CircleImage = forwardRef<HTMLImageElement, Props>(
    function CircleImage({className = "", ...props}, ref) {
        return <img ref={ref} className={css.image + " " + className} {...props} />
    },
)
