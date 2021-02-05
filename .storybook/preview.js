import React from 'react';
import Global from '../src/Core/Global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <React.Fragment>
      <Global />
      <Story />
    </React.Fragment>
  ),
];
