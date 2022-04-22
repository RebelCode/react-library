import React from "react"
import {Panel} from "./index"
import {newStory} from "../../utils/stories"

const {Meta, Builder} = newStory(Panel, {
  title: "Components/Panel/Default",
  parameters: {layout: "centered"},
})

export default Meta

export const Default = Builder.addCase({
  variant: "default",
  children: <span>This is the default panel</span>,
})
