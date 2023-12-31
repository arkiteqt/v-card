import { createHeader } from '../Header';


export const createPage = () => {
  const page = document.createElement('div');
  const body = document.getElementsByTagName('body');
  body[0].classList.add('header-has-img');
  page.appendChild(createHeader({ backgroundImg : true }));
  return page;
};
