import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'shared/NavBar',
  component: NavBar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Common: Story = {};
// export const Light: Story = {
//     decorators: [ThemeSwitcherDecorator(Theme.LIGHT)],
// };
//
// export const Dark: Story = {
//     decorators: [ThemeSwitcherDecorator(Theme.DARK)],
// };
