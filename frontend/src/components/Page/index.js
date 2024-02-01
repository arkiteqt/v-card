import { createHeader } from '../Header';
import { createSidebar } from '../Sidebar';

export const createPage = () => {
  const page = document.createElement('div');
  page.appendChild(createHeader({ backgroundImg : true }));
  page.appendChild(createSidebar());

  return page;
};
