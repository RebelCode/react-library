import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "../index";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  name: "multiChoice",
  value: "multipleDaily"
};

export const Options = Template.bind({});
Options.args = {
  name: "country",
  options: [
    {
      value: "Malta",
      label: "Malta",
    },
    {
      value: "France",
      label: "France",
    },
    {
      value: "Ghana",
      label: "Ghana",
    },
  ],
};

