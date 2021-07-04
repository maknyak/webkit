import Box from '@components/Box';

export default {
  title: 'Components/Box',
  Component: Box,
};

export const box = ({ children, ...args }) => <Box {...args}>{children}</Box>;

box.args = {
  children: 'Box Components',
  color: 'black',
  backgroundColor: 'white',
  border: '1px solid blue',
  ref: 'ref',
};
