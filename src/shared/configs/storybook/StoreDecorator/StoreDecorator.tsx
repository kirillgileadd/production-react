import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={asyncReducers}>
      <StoryComponent />
    </StoreProvider>
  );
