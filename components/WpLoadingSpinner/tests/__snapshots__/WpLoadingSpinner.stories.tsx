import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WpLoadingSpinner } from '../../index';

export default {
  title: "Components/WpLoadingSpinner",
  component: WpLoadingSpinner,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof WpLoadingSpinner>;

const Template: ComponentStory<typeof WpLoadingSpinner> = (args) => <WpLoadingSpinner {...args} />;

export const Intial = Template.bind({});
Intial.args = {};