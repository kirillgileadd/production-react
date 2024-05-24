export type { ProfileT, ProfileSchema } from './model/type/profile';

export { profileReducer, profileActions } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileFirtname } from './model/selectors/getProfileFirtname/getProfileFirtname';
