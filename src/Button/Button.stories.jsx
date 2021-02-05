/* eslint-disable react/prop-types */
// Button.stories.js

import { Button } from '@components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
    },
  },
};

export const button = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

button.args = {
  children: 'Button',
  color: 'primary',
  style: null,
};
