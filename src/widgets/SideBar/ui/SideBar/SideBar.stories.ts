import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'shared/SideBar',
    component: SideBar,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Common: Story = {};
