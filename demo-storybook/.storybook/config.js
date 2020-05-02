import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

function loadStories() {
  require('../src/stories/index.stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

