import React, {HTMLAttributes} from "react";
import css from "./Square.pcss";
import {classList} from "../../utils/classes";

export type Props = HTMLAttributes<HTMLDivElement> & {};

export function Square({className, children, ...props}: Props) {
    return (
        <div className={classList(css.filler, className as string)} aria-label="Square" {...props}>
            <div className={css.positioner}>
                {children}
            </div>
        </div>
    );
}
