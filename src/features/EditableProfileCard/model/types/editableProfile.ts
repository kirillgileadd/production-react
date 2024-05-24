import { ProfileT } from 'entities/Profile';

export interface EditableProfileSchema {
  form?: DeepPartial<ProfileT>;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}
