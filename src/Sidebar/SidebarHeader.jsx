import { sidebarHeader } from '@components/Sidebar/style';

export function SidebarHeader({ children }) {
  return (
    <div css={sidebarHeader}>{children}</div>
  );
}
