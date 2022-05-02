import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FlexColumn, FlexRow } from "../index";

export default {
  title: "Components/FlexColumn",
  component: FlexColumn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FlexColumn>;

const Template: ComponentStory<typeof FlexColumn> = (args) => (
  <FlexColumn {...args} />
);

export const Column = Template.bind({});
Column.args = {
  align: "flex-start",
  style: { flex: 1 },
  children: (
    <>
      <a href="">Go to Posts</a>
      <a href="">Go to Posts</a>
    </>
  ),
};
