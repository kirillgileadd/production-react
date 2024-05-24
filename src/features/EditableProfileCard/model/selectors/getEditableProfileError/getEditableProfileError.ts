import { StateSchema } from 'app/providers/StoreProvider';

export const getEditableProfileError = (state: StateSchema) =>
  state.editableProfile?.error;
