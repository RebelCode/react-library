import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FlexRow, FlexColumn } from "./index";

export default {
  title: "Components/FlexRow",
  component: FlexRow,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FlexRow>;

const Template: ComponentStory<typeof FlexRow> = (args) => (
  <FlexRow {...args} />
);

export const Row = Template.bind({});
Row.args = {
  justify: "flex-start",
  children: (
    <>
      <FlexColumn>
        <a href="">One</a>
        <a href="">Two</a>
      </FlexColumn>
      <FlexColumn>
        <a href="">Three</a>
        <a href="">Four</a>
      </FlexColumn>
    </>
  ),
};

