import type { Decorator } from '@storybook/react-webpack5';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider';
export const ThemeDecorator = (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) => (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );