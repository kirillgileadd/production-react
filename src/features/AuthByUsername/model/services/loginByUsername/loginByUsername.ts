import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_TOKEN } from 'shared/const/localStorage';
import { ThunkConfigT } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { LoginErrorSchemaT } from 'features/AuthByUsername/model/types/loginSchema';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfigT<LoginErrorSchemaT>
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_TOKEN, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    thunkAPI.extra.navigate?.('/profile');

    return response.data;
  } catch (_err) {
    const error = _err as AxiosError<LoginErrorSchemaT>;
    if (_err instanceof AxiosError && error.response?.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({ message: 'Что-то пошло не так' });
  }
});
