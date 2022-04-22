import React from "react"
import {DefaultRcTheme, RcThemeProvider} from "../theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => React.createElement(RcThemeProvider, {
    emotionOptions: {key: "rc"},
    theme: DefaultRcTheme,
    children: React.createElement(Story),
  }),
]
