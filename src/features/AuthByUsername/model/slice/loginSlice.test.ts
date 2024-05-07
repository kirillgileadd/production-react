import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('user')),
    ).toEqual({ username: 'user' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('pass')),
    ).toEqual({ password: 'pass' });
  });

  test('test set isLoading', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };

    expect(
      loginReducer(
        state as LoginSchema,
        loginByUsername.pending('', {
          username: '123',
          password: '123',
        }),
      ),
    ).toEqual({ isLoading: true });
  });
});
