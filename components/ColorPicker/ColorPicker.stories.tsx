import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColorPicker } from "./index";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const Picker = Template.bind({});
Picker.args = {
  value: 'blue'
};

