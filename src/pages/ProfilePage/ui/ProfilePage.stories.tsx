import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '../../../shared/configs/storybook/StoreDecorator/StoreDecorator';
import { profileReducer } from '../../../entities/Profile';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Common: Story = {
  decorators: [
    StoreDecorator(
      {
        profile: {
          data: undefined,
          isLoading: false,
          error: undefined,
          readonly: true,
        },
      },
      { profile: profileReducer },
    ),
  ],
};
