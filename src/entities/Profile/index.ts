export type { ProfileT, ProfileSchema } from './model/type/profile';

export { profileReducer, profileActions } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
