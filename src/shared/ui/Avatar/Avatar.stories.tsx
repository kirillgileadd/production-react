import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './avarat-mock.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: AvatarImg,
    size: 150,
  },
};
