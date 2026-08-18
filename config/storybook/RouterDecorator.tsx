import '../../src/app/styles/index.scss';
import type { Decorator } from '@storybook/react-webpack5';
import { MemoryRouter } from 'react-router-dom';
export const RouterDecorator: Decorator = (Story) => {
  return(
    <MemoryRouter>
      <Story/>
    </MemoryRouter>
  )
};