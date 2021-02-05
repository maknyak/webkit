import PropTypes from 'prop-types';
import { card } from '@components/Card/style';

/**
 * Card adalah sebuah wadah konten yang fleksibel dan dapat dikonfigurasi dengan berbagai opsi.
 */
export const Card = ({ children, style }) => (
  <div css={[card, style]}>{children}</div>
);

Card.propTypes = {
  /**
   * Card content
   */
  children: PropTypes.node.isRequired,
  /**
   * Custom styling
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Card.defaultProps = {
  style: null,
};
