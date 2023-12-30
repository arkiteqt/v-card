import {createButton} from './index.js';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'RSCard/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return createButton({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
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

