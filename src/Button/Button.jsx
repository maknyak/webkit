import PropType from 'prop-types';
import { btn } from '@components/Button/style';

export const Button = ({
  type,
  children,
  size,
  color,
  block,
  outline,
  style,
}) => (
  <button css={[btn(color, size, block, outline), style]} type={type}>{children}</button>
);

Button.propTypes = {
  /**
   * Config for set button label
   */
  children: PropType.node.isRequired,
  /**
   * Config for change button type
   */
  type: PropType.oneOf(['button', 'submit', 'reset']),
  /**
   * Config for change variant button
   */
  color: PropType.oneOf(['primary', 'secondary', 'info', 'success', 'danger', 'warning', 'neutral']),
  /**
   * Config for make button block
   */
  block: PropType.bool,
  /**
   * Config for make button outline
   */
  outline: PropType.bool,
  /**
   * Config for change button size
   */
  size: PropType.oneOf(['sm', 'md', 'lg']),
  /**
   * Custom styling for overide default button styling
   */
  style: PropType.oneOfType([PropType.object, PropType.string]),
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  size: 'md',
  block: false,
  outline: false,
  style: null,
};
