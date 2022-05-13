import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "../index";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Enabled = Template.bind({});
Enabled.args = {
  value: true,
  disabled: false,
};


export const Disabled = Template.bind({});
Disabled.args = {
  value: true,
  disabled: true,
};