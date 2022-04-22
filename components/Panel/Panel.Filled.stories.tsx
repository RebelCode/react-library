import React from "react"
import {Panel} from "./index"
import {newStory} from "../../utils/stories"
import {PanelColors} from "./panel-colors"

const {Meta, Builder} = newStory(Panel, {
  title: "Components/Panel/Filled",
  parameters: {layout: "centered"},
})

export default Meta

export const {Dark, Gray, Red, Pink, Grape, Violet, Indigo, Blue, Cyan, Teal, Green, Lime, Yellow, Orange} =
  Builder.addMultiple(
    {variant: "filled", children: <span>This is a "filled" panel</span>},
    PanelColors,
  )
