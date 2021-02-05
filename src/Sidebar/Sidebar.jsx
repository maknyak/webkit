import PropType from 'prop-types';
import { sidebar } from '@components/Sidebar/style';

export function Sidebar({ children }) {
  return (
    <div css={[sidebar]}>
      {children}
    </div>
  );
}

Sidebar.propType = {
  children: PropType.node.isRequired,
};
