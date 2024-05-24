import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigT } from 'app/providers/StoreProvider';
import { profileActions, ProfileT } from 'entities/Profile';
import { getEditableProfileForm } from '../../selectors/getEditableProfileForm/getEditableProfileForm';
import { editableProfileActions } from '../../slice/editableProfileSlice';

export const updateProfileData = createAsyncThunk<
  ProfileT,
  void,
  ThunkConfigT<string>
>('editableProfile/updateProfileData', async (_, thunkAPI) => {
  try {
    thunkAPI.getState();

    const formData = getEditableProfileForm(thunkAPI.getState());
    const response = await thunkAPI.extra.api.put<ProfileT>(
      '/profile',
      formData,
    );

    thunkAPI.dispatch(profileActions.setProfileData(response.data));
    thunkAPI.dispatch(editableProfileActions.setReadonly(true));

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('error');
  }
});
