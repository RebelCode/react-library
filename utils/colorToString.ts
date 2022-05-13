import { Color } from "react-color-types";

export function colorToString(color: Color) {
    if (typeof color === "string") {
        return color;
    }

    if ("r" in color) {
        return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
    }

    if ("h" in color) {
        return "hsla(" + color.h + "," + color.s + "," + color.l + "," + color.a + ")";
    }

    return "#fff";
}
