import type { Decorator } from '@storybook/react-webpack5';
import { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/DeepPartial';
export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) => (
    <StoreProvider initialState={state as StateSchema}>
        <Story />
    </StoreProvider>
  );