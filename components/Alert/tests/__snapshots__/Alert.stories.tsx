import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from '../../index';

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};

export const ProTip = Template.bind({});
ProTip.args = {
  type: "pro-tip",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};

export const Premium = Template.bind({});
Premium.args = {
  type: "premium",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};

export const Grey = Template.bind({});
Grey.args = {
  type: "grey",
  children: <>Pax Unlock more features today. <a target="_blank" rel="noreferrer" href="www.google.com">Upgrade now.</a></>
};
