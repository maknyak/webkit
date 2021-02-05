/* eslint-disable react/prop-types */
// Sidebar.stories.js

import {
  Sidebar, SidebarHeader, SidebarNav, SidebarNavItem,
} from '@components/Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: 'Sidebar',
      },
    },
  },
};

export const sidebar = ({ children, ...args }) => (
  <Sidebar {...args}>
    <SidebarHeader>
      <h1 style={{ fontSize: '1.5rem' }}>iandev.me</h1>
      <div style={{ marginLeft: 'auto' }}>
        <button>#</button>
      </div>
    </SidebarHeader>
    <SidebarNav>
      <SidebarNavItem>Dashboard</SidebarNavItem>
      <SidebarNavItem>Pages</SidebarNavItem>
      <SidebarNavItem>Article</SidebarNavItem>
    </SidebarNav>
  </Sidebar>
);

sidebar.args = {
  children: 'Sidebar',
  style: null,
};
