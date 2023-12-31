import { createHeader } from '../Header';


export const createPage = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const header = createHeader({backgroundImg : true});


  return wrapper;
};
