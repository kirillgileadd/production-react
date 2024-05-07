import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({ error: 'error' });
  });

  test('with valid value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'admin',
      password: '123',
      isLoading: true,
    });
  });

  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
