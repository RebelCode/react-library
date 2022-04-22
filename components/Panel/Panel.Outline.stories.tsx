import React from "react"
import {Panel} from "./index"
import {newStory} from "../../utils/stories"
import {PanelColors} from "./panel-colors"

const {Meta, Builder} = newStory(Panel, {
  title: "Components/Panel/Outline",
  parameters: {layout: "centered"},
})

export default Meta

export const {Dark, Gray, Red, Pink, Grape, Violet, Indigo, Blue, Cyan, Teal, Green, Lime, Yellow, Orange} =
  Builder.addMultiple(
    {variant: "outline", children: <span>This is an "outline" panel</span>},
    PanelColors,
  )
