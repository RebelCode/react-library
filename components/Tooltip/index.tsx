import css from "./Tooltip.pcss"
import React, {useEffect} from "react"
import ReactDOM from "react-dom"
import {Manager, Popper, Reference} from "react-popper"
import {DualPopperChildren, Placement} from "popper"
import {classList} from "../../utils/classes"

type ThemeProp = {
  root?: string,
  content?: string,
  container?: string,
  containerTop?: string,
  containerBottom?: string,
  containerLeft?: string,
  containerRight?: string;
  arrow?: string,
  arrowTop?: string,
  arrowBottom?: string,
  arrowLeft?: string,
  arrowRight?: string,
}

type Props = {
  visible: boolean;
  delay?: number;
  children: DualPopperChildren;
  placement?: Placement;
  theme?: ThemeProp;
}

export default function Tooltip({visible, delay, placement, theme, children}: Props) {
  theme = theme ?? {}
  placement = !placement ? "bottom" : placement

  const [showTooltip, setShowTooltip] = React.useState(false)
  const modifiers = {
    preventOverflow: {
      boundariesElement: document.body,
      padding: 5,
    },
  }

  useEffect(() => {
    const ms = visible ? delay : 1
    const timeout = setTimeout(() => setShowTooltip(visible), ms)

    return () => clearTimeout(timeout)
  }, [visible])

  const containerClassKey = getAlignedClass("container", placement)
  const arrowClassKey = getAlignedClass("arrow", placement)

  const containerClass = classList(
    (css as any)[containerClassKey],
    theme.container as string,
    (theme as any)[containerClassKey],
  )
  const arrowClass = classList(
    (css as any)[arrowClassKey],
    theme.arrow as string,
    (theme as any)[arrowClassKey],
  )

  return (
    <Manager aria-label="Tooltip">
      <Reference>
        {(props) => children[0](props)}
      </Reference>
      <Popper placement={placement} modifiers={modifiers} positionFixed={true} aria-label="Tooltip">
        {
          ({ref, style, placement, arrowProps}) => !showTooltip ? null : (
            ReactDOM.createPortal(
              <div
                ref={ref}
                className={classList(css.root, theme!.root as string)}
                style={style}
                aria-label="Tooltip"
                tabIndex={-1}>
                <div className={containerClass} data-placement={placement} aria-label="Tooltip" >
                  <div className={classList(css.content, theme!.content as string)}>
                    {children[1]}
                  </div>
                  <div
                    className={arrowClass}
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                    data-placement={placement} aria-label="Tooltip"/>
                </div>
              </div>,
              document.body,
            )
          )
        }
      </Popper>
    </Manager>
  )
};

function getAlignedClass(className: string, placement: Placement) {
  switch (placement) {
    case "top":
    case "top-start":
    case "top-end":
      return className + "Top"
    case "bottom":
    case "bottom-start":
    case "bottom-end":
      return className + "Bottom"
    case "left":
    case "left-start":
    case "left-end":
      return className + "Left"
    case "right":
    case "right-start":
    case "right-end":
      return className + "Right"
    default:
      return className
  }
}
