import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '../../index';

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Intial = Template.bind({});
Intial.args = {
  cols: [
    {
      id: "name",
      label: "Name",
      render: () => <h1>col</h1>,
    },
  ],
  rows: [
    {
      id: "name",
      label: "Name",
      render: () => <h1>rows</h1>,
    }]
};