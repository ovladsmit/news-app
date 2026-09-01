import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text, TextTheme } from './Text';
const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Я заголовок',
    text: 'Я текст'
  }
};

export const Error: Story = {
  args: {
    title: 'Я заголовок',
    text: 'Я текст',
    theme: TextTheme.ERROR
  }
};

export const OnlyTytle: Story = {
  args: {
    title: 'Я заголовок',
  }
};

export const OnlyText: Story = {
  args: {
    text: 'Я текст',
  }
};