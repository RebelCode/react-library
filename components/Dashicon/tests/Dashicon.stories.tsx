import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dashicon } from "../index";

export default {
  title: "Components/Dashicon",
  component: Dashicon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Dashicon>;

const Template: ComponentStory<typeof Dashicon> = (args) => (
  <Dashicon {...args} />
);

export const Picker = Template.bind({});
Picker.args = {
  icon: 'menu'
};

