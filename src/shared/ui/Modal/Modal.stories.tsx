import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, corrupti? Quas libero accusamus vitae amet laboriosam quasi consequuntur voluptate sint magnam quisquam dolor expedita cupiditate, nisi rerum fuga, dolore",
    onClose: () => {}
  },
};

