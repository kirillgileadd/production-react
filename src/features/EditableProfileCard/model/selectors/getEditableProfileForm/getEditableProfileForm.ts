import { StateSchema } from 'app/providers/StoreProvider';

export const getEditableProfileForm = (state: StateSchema) =>
  state.editableProfile?.form;
