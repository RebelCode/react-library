import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from '@storybook/testing-library';
import { TextArea } from "../index";

export default {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Initial = Template.bind({});
Initial.args = {};

export const defaultValue = Template.bind({});
defaultValue.args = {
  value: "....."
};

export const FilledTextarea = Template.bind({});
FilledTextarea.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('textarea'), 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', {
    delay: 100,
  });
};