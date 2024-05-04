import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAtuhData = (state: StateSchema) => state.user.authData;
