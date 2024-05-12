import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFirtname = (state: StateSchema) =>
  state.profile?.data?.first;
