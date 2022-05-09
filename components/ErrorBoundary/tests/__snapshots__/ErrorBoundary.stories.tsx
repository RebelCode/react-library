import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorBoundary } from '../../index';

export default {
  title: "Components/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => <ErrorBoundary {...args} />;

export const Intial = Template.bind({});
Intial.args = {
  errorContents: "Cannot render component",
};