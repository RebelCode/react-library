import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./index";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  visible: true,
  children: [()=><button>Submit</button>, <h1>sdlkmsldkksm</h1>]
};
