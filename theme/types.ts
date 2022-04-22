import {MantineTheme} from "@mantine/styles"

export type RcTheme = MantineTheme

export type ColorName =
  "dark"
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange"

export type SizeName = "xs" | "sm" | "md" | "lg" | "xl"

export type StaticVariant = "default" | "light" | "filled" | "outline"
export type InteractiveVariant = StaticVariant | "subtle"
