import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './index';

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: <h1>lskdmskmdkms</h1>
};

