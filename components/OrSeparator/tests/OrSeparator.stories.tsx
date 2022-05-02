import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {OrSeparator} from "../index";

export default {
  title: "Components/OrSeparator",
  component: OrSeparator,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof OrSeparator>;

const Template: ComponentStory<typeof OrSeparator> = (args) => (
  <OrSeparator />
);

export const Initial = Template.bind({});
Initial.args = {};

