import React from 'react';
import PropTypes from 'prop-types';
import BoxStyled from '@components/Box/Box.styled';

const Box = React.forwardRef(({ children, ...props }, ref) => (
  <>
    <BoxStyled {...props} ref={ref}>
      {children}
    </BoxStyled>
  </>
));

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
