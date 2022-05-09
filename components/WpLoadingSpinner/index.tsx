import React, {CSSProperties} from "react";
import "./WpLoadingSpinner.pcss";

interface Props {
    size?: number;
}

export const WpLoadingSpinner = ({size}: Props) => {
    size = size ?? 24;

    const sizePx = size + "px";
    const shadowX = (size * 0.25) + "px";
    const shadowSize = (size * 0.375) + "px";

    const style: CSSProperties = {
        width: sizePx,
        height: sizePx,
        boxShadow: `${shadowX} 0 0 ${shadowSize} #999 inset`,
    };

    return (<span className="loading-spinner" style={style}  aria-label="WpLoadingSpinner" />);
};
