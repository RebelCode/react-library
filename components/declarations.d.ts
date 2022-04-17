declare module "*.scss";
declare module "*.css";
declare module "*.pcss";

declare module "react-color-types" {
    export interface HSLColor {
        a?: number;
        h: number;
        l: number;
        s: number;
    }

    export interface RGBAColor {
        a?: number;
        b: number;
        g: number;
        r: number;
    }

    export type Color = string | HSLColor | RGBAColor;

    export interface MultiColor {
        hex: string;
        hsl: HSLColor;
        rgb: RGBAColor;
    }
}

declare module "popper" {
    import {ReactNode, Ref} from "react";

    export type Placement = "auto-start"
        | "auto"
        | "auto-end"
        | "top-start"
        | "top"
        | "top-end"
        | "right-start"
        | "right"
        | "right-end"
        | "bottom-end"
        | "bottom"
        | "bottom-start"
        | "left-end"
        | "left"
        | "left-start";

    export type DualPopperChildren = [(props: { ref: Ref<any> }) => ReactNode, ReactNode];
}
