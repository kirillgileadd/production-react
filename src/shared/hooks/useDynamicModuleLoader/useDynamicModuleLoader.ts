import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const useDynamicModuleLoader = ({
  reducers,
  removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });
    return () => {
      Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name);
          dispatch({ type: `@REMOVE ${name} reducer` });
        }
      });
    };
    // eslint-disable-next-line
    }, []);
};
