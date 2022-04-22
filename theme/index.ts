import {MantineProvider} from "@mantine/styles"
import {RcTheme} from "./types"

export * from "./types"

export const RcThemeProvider = MantineProvider

export const DefaultRcTheme: Partial<RcTheme> = {
  primaryColor: "blue",
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
}
