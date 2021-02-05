import PropType from 'prop-types';
import { sidebarNav } from '@components/Sidebar/style';

export function SidebarNav({ children }) {
  return (
    <div css={[sidebarNav]}>
      {children}
    </div>
  );
}

SidebarNav.propType = {
  children: PropType.node.isRequired,
};
