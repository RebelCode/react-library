import React, {CSSProperties, forwardRef} from "react"

type BaseProps = React.HTMLAttributes<HTMLDivElement>

type FlexProps = BaseProps & {
    dir?: "column" | "row",
    wrap?: boolean,
    justify?: CSSProperties["justifyContent"],
    align?: CSSProperties["alignItems"],
    justifySelf?: CSSProperties["justifySelf"],
    alignSelf?: CSSProperties["alignSelf"],
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
    function Flex(
        {
            dir = "column",
            justify = "flex-start",
            align = "center",
            wrap,
            justifySelf,
            alignSelf,
            style,
            ...props
        },
        ref,
    ) {
        const styles: CSSProperties = {
            ...style,
            display: "flex",
            flexFlow: dir + " " + (wrap ? "wrap" : "nowrap"),
            justifyContent: justify,
            alignItems: align,
            justifySelf,
            alignSelf,
        }

        return <div ref={ref} style={styles} {...props} />
    },
)

type PropsWithoutDir = Omit<FlexProps, "dir">

// @ts-ignore
export const FlexColumn = (props: PropsWithoutDir) => <Flex dir="column" {...props} />
// @ts-ignore
export const FlexRow = (props: PropsWithoutDir) => <Flex dir="row" {...props} />
