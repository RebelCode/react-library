import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HelpTooltip from "./index";

export default {
  title: "Components/HelpTooltip",
  component: HelpTooltip,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HelpTooltip>;

const Template: ComponentStory<typeof HelpTooltip> = (args) => (
  <HelpTooltip {...args} />
);

export const Help = Template.bind({});
Help.args = {
  maxWidth: 200,
  children: <>One, Two. Three</>
};

