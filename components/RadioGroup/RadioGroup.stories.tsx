import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioGroup } from "./index";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  name: "multiChoice",
  value: "multipleDaily",
  options: [
    {
      value: "multipleDaily",
      label: "Multiple times a day.",
    },
    {
      value: "onceDaily",
      label: "At least once a day.",
    },
    {
      value: "fewTimesWeekly",
      label: "A few times a week.",
    },
    {
      value: "onceWeekly",
      label: "Once a week or less often.",
    },
  ],
};


export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: "multiChoice",
  value: "multipleDaily",
  options: [
    {
      value: "multipleDaily",
      label: "Multiple times a day.",
    },
    {
      value: "onceDaily",
      label: "At least once a day.",
    },
    {
      value: "fewTimesWeekly",
      label: "A few times a week.",
    },
    {
      value: "onceWeekly",
      label: "Once a week or less often.",
    },
  ],
};