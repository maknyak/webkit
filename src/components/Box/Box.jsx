import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import BoxStyled from './Box.styled';

const Box = forwardRef(({ children, tag, ...props }, ref) => (
  <>
    <BoxStyled as={tag} {...props} ref={ref}>
      {children}
    </BoxStyled>
  </>
));

Box.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};

Box.defaultProps = {
  children: '',
  tag: 'div',
};

export default Box;
