import PropType from 'prop-types';
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
  children: PropType.node.isRequired,
  /**
   * Custom styling
   */
  style: PropType.oneOfType([PropType.object, PropType.string]),
};

Card.defaultProps = {
  style: null,
};
