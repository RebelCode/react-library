import React, {forwardRef, PropsWithChildren} from "react"
import {ColorName, SizeName, StaticVariant} from "../../theme"
import {createStyles} from "@mantine/styles"

type StyleProps = {
  color?: ColorName;
  variant?: StaticVariant;
  padding?: SizeName;
  radius?: SizeName;
}

export type PanelProps = React.HTMLProps<"div"> & PropsWithChildren<StyleProps>

const useStyles = createStyles(
  (theme, {variant = "default", color = "gray", padding = "xs", radius = "xs"}: StyleProps) => {
    let border, bg, fg = theme.black

    switch (variant) {
      default:
      case "default": {
        bg = theme.white
        border = theme.colors.gray[2]
        break
      }
      case "light": {
        bg = theme.colors[color][0]
        border = theme.colors[color][2]
        break
      }
      case "filled": {
        fg = theme.white
        bg = theme.colors[color][6]
        border = theme.colors[color][6]
        break
      }
      case "outline": {
        bg = "transparent"
        fg = theme.colors[color][6]
        border = theme.colors[color][6]
      }
    }

    return {
      box: {
        color: fg,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: theme.radius[radius],
        padding: theme.spacing[padding],
      },
    }
  },
)

export const Panel = forwardRef<HTMLDivElement, PanelProps>(({children, ...props}, ref) => {
  const {classes} = useStyles(props)

  return (
    <div ref={ref} className={classes.box}>
      {children}
    </div>
  )
})
