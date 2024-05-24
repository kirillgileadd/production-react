import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { EditableProfileSchema } from 'features/EditableProfileCard';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  editableProfile?: EditableProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgT {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfigT<ErrorT> {
  rejectValue: ErrorT;
  extra: ThunkExtraArgT;
  state: StateSchema;
}
