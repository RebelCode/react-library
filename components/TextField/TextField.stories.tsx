import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "./index";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  value: "Rebel Code",
  placeholder: "Email",
};
