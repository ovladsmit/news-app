import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button, ButtonSize, ThemeButton } from './Button';
const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(ThemeButton),
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'TEST',
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'TEST',
  },
};

export const OutlineSizeL: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'TEST',
    size: ButtonSize.L,
  },
};

export const BACKGROUND: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
    children: 'TEST',
  },
};

export const BACKGROUND_INVERTED: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: 'TEST',
  },
};

export const Square: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: '>',
    square: true
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.L
  },
};

export const SquareSizeXL: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.XL
  },
};



