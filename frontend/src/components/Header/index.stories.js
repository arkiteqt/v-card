import { createHeader } from './index.js';

export default {
  title: 'RSCard/Header',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => createHeader(args),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    hasBackgroundImg : {control :'boolean'},
    backgroundImg : { control : 'file'},
    displayLogoAsImg : { control : 'boolean'},
    hasSidebar : {control : 'boolean'}
  },
};

export const HeaderHasImg = {
  args : {
    hasBackgroundImg : true
  }
};

export const HeaderWithoutBackgroundImage = {
    args : {
      hasBackgroundImg : false
    }
};
