import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./index";

export default {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Initial = Template.bind({});
Initial.args = {};

export const defaultValue = Template.bind({});
defaultValue.args = {
  value: "....."
};