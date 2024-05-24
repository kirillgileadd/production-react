import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileT } from 'entities/Profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EditableProfileSchema } from '../types/editableProfile';

const initialState: EditableProfileSchema = {
  readonly: true,
  form: undefined,
  error: undefined,
  isLoading: false,
};

export const editableProfileSlice = createSlice({
  name: 'editableProfile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state, action: PayloadAction<ProfileT | undefined>) => {
      state.readonly = true;
      state.form = action.payload;
    },
    updateProfile: (state, action: PayloadAction<DeepPartial<ProfileT>>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.form = payload;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: editableProfileActions } = editableProfileSlice;
export const { reducer: editableProfileReducer } = editableProfileSlice;
