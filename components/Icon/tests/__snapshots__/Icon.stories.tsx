import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../../index';

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Intial = Template.bind({});
Intial.args = {};