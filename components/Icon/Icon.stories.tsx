import React from "react"
import {Icon} from "./index"
import {CloseIcon} from "./CloseIcon"
import {newStory} from "../../utils/stories"

const {Meta, Builder} = newStory(Icon, {
  parameters: {layout: "centered"},
})

export default Meta

export const Close = Builder.addCase({
  icon: CloseIcon,
})
