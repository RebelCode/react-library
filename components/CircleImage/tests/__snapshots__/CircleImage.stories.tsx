import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircleImage } from '../../index';

export default {
  title: "Components/CircleImage",
  component: CircleImage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CircleImage>;

const Template: ComponentStory<typeof CircleImage> = (args) => <CircleImage {...args} />;

export const Intial = Template.bind({});
Intial.args = {
  src: "https://www.w3schools.com/tags/smiley.gif",
};