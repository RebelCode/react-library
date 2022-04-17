import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Square } from "./index";

export default {
  title: "Components/Square",
  component: Square,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => (
  <Square {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  children: (
    <div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  ),
  style: {
    textAlign: "center",
    padding: "20px"
  }
};
