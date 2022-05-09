import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Masonry } from '../../index';

export default {
  title: "Components/Masonry",
  component: Masonry,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Masonry>;

const Template: ComponentStory<typeof Masonry> = (args) => <Masonry {...args} />;

export const Intial = Template.bind({});
Intial.args = {};