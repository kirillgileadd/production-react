import { CountryT, CurrencyT } from 'shared/const/common';

export interface ProfileT {
  first: string | null;
  last: string | null;
  age: number | null;
  currency: CurrencyT | null;
  country: CountryT | null;
  city: string | null;
  username: string | null;
  avatar: string | null;
}

export interface ProfileSchema {
  data?: ProfileT;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}
