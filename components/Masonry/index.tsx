import React, {CSSProperties} from "react";
import css from "./Masonry.pcss";
import {splitArray} from "../../utils/splitArray"

export type Props = {
    columns: number;
    gap?: string | number;
    children: any;
}

export function Masonry({columns, gap, children}: Props) {
    gap = gap ?? 0;

    const style: CSSProperties = {
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        columnGap: gap,
    };

    const cellCss: CSSProperties = {
        marginBottom: gap,
    };

    return (
        <div className={css.root} style={style} aria-label="Masonry" >
            {splitArray(children, columns).map((column, colIdx) => (
                <div key={colIdx} className={css.column}>
                    {column.map((child: any, rowIdx) => (
                        <div key={`${colIdx}-${rowIdx}`} className={css.cell} style={cellCss}>
                            {child}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
