import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilteredListField } from "./index";

export default {
  title: "Components/FilteredListField",
  component: FilteredListField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FilteredListField>;

const Template: ComponentStory<typeof FilteredListField> = (args) => (
  <FilteredListField {...args} />
);

export const FilteredList = Template.bind({});
FilteredList.args = {};

