import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigT } from 'app/providers/StoreProvider';
import { ProfileT } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
  ProfileT,
  void,
  ThunkConfigT<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get<ProfileT>('/profile');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('error');
  }
});
