import { white } from '@components/Core/style';

const sidebarWidth = '250px';

export const sidebar = `
  bottom: 0;
  background-color: ${white};
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
  display: block;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transition: all .4s ease;
  width: ${sidebarWidth};
  z-index: 1050;
`;

export const sidebarHeader = `
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

export const sidebarNav = `
  padding: 0 1.5rem;
`;

export const sidebarNavItem = `
  padding: .675rem 0;
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
`;
