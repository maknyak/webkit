import PropType from 'prop-types';
import { sidebarNavItem } from '@components/Sidebar/style';

export function SidebarNavItem({ children }) {
  return (
    <div css={[sidebarNavItem]}>
      {children}
    </div>
  );
}

SidebarNavItem.propType = {
  children: PropType.node.isRequired,
};
