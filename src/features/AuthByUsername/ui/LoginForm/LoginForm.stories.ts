import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator/StoreDecorator';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      {
        loginForm: { username: 'admin', password: '123' },
      },
      { loginForm: loginReducer },
    ),
  ],
};

export const Error: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      {
        loginForm: { username: '', password: '', error: 'error' },
      },
      { loginForm: loginReducer },
    ),
  ],
};

export const Empty: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      {
        loginForm: { username: '', password: '' },
      },
      { loginForm: loginReducer },
    ),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator(
      {
        loginForm: { username: '', password: '', isLoading: true },
      },
      { loginForm: loginReducer },
    ),
  ],
};
