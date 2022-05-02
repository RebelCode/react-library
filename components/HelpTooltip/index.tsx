import React, {ReactNode} from "react";
import css from "./HelpTooltip.pcss";
import {Dashicon} from "../Dashicon";
import Tooltip from "../Tooltip";
import { classList } from "../../utils/classes";

type Props = {
    maxWidth?: number;
    children: ReactNode;
}

export default function HelpTooltip({maxWidth, children}: Props) {
    maxWidth = maxWidth ?? 300;

    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

    const handleMouseOver = () => setIsTooltipVisible(true);
    const handleMouseOut = () => setIsTooltipVisible(false);

    const tooltipTheme = {
        content: css.tooltipContent,
        container: css.tooltipContainer,
    };

    const all = classList(css.icon, isTooltipVisible ? css.iconVisible : css.iconNotvisible) 

    return (
        <div className={css.root}  aria-label="HelpTooltip">
            <Tooltip visible={isTooltipVisible} theme={tooltipTheme}>
                {
                    ({ref}) => (
                        <span ref={ref}
                              className={all}
                              onMouseEnter={handleMouseOver}
                              onMouseLeave={handleMouseOut}>
                            <Dashicon icon="info" />
                        </span>
                    )
                }

                <div style={{maxWidth: maxWidth + "px"}}>{children}</div>
            </Tooltip>
        </div>
    );
};
