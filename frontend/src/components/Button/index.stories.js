import {createButton} from './index.js';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'RSCard/Button',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return createButton(args);
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    icon : {control : 'text'},
    primary: { control: 'boolean' },
    border : {control : 'boolean'},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Icon = {
  args: {
    primary: true,
    label: '',
    icon : 'menu'
  },
};

