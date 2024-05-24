import { CurrencyT } from 'entities/Currency/model/types/currency';
import { CountryT } from 'entities/Country/model/types/country';

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
}
