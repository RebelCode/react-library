import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ListField} from "../index";

export default {
  title: "Components/ListField",
  component: ListField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListField>;

const Template: ComponentStory<typeof ListField> = (args) => (
  <ListField {...args} />
);

export const Empty = Template.bind({});
Empty.args = {};


export const Initial = Template.bind({});
Initial.args = {
  value: ["ampo", "shoe"],
  autoFocus: true
};

