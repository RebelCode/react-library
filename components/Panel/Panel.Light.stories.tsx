import React from "react"
import {Panel} from "./index"
import {newStory} from "../../utils/stories"
import {PanelColors} from "./panel-colors"

const {Meta, Builder} = newStory(Panel, {
  title: "Components/Panel/Light",
  parameters: {layout: "centered"},
})

export default Meta

export const {Dark, Gray, Red, Pink, Grape, Violet, Indigo, Blue, Cyan, Teal, Green, Lime, Yellow, Orange} =
  Builder.addMultiple(
    {variant: "light", children: <span>This is a "light" panel</span>},
    PanelColors,
  )
