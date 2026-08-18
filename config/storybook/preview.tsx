import type { Preview } from '@storybook/react-webpack5'
import { StyleDecorator } from './StyleDecorator';
import { ThemeDecorator } from './ThemeDecorator';
import { RouterDecorator } from './RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.DARK), RouterDecorator]
};

export default preview;