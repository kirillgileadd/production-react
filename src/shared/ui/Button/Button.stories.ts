import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    children: 'Text',
  },
};

export const Outlined: Story = {
  args: {
    theme: 'outline',
    children: 'Text',
  },
};

export const Unstyled: Story = {
  args: {
    theme: 'unstyled',
    children: 'Text',
  },
};
