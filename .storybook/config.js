import { configure } from '@storybook/vue';

import "../src/voltage/scss/voltage.scss";

import "../src/scss/storybook.scss";

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
