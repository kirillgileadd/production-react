import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Лейбл',
    value: '2',
    options: [
      { value: '1', label: 'Тест1' },
      { value: '2', label: 'Тест2sadadassdsadasdasdasdsdasdsd' },
    ],
  },
};
