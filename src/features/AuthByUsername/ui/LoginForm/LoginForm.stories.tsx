import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from '../../../../../config/storybook/StoreDecorator';
const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: false }
  })]
  
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
