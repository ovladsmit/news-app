import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Navbar } from './Navbar';
import { MemoryRouter } from 'react-router-dom';
const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};

