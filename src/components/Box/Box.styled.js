import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  textStyle,
  system,
} from 'styled-system';

const BoxStyled = styled.div(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  textStyle,
  system((props) => props.system)
);

export default BoxStyled;
