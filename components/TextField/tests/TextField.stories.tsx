import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from '@storybook/testing-library';
import { TextField } from "../index";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  value: "Rebel Code",
  placeholder: "Email",
};


export const FilledTextfield = Template.bind({});
FilledTextfield.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('textfield'), 'Rebel Code', {
    delay: 100,
  });
};