import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Common: Story = {};

Common.decorators = [
  StoreDecorator({
    user: { authData: { id: '1', username: '123' } },
  }),
];
