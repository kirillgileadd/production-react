import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa cumque deserunt doloremque eligendi, error minus nam necessitatibus nobis placeat quisquam quod sunt voluptate? Dicta dolorem earum hic molestias nemo!\n',
  },
};
