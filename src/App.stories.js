import React from 'react';

import App from './App';

export default {
  title: 'App/app',
  component: App,
};

const Template = (args) => <App {...args} />;

export const main = Template.bind({});
main.args = {
};
