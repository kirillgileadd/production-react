import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
  test('success getProfile', async () => {
    const userProfile = {
      first: 'Кирилл',
      last: 'Гай',
      age: 21,
      currency: 'RUB',
      country: 'Russia',
      city: 'St. Petersburg',
      username: 'gilead',
      avatar:
        'https://sun9-3.userapi.com/impg/fRt9rFPnIPsoR2qXjrNgmhYkYKOZJ9wc1K007w/PG5c7b_rDSI.jpg?size=2560x1707&quality=96&sign=e80fed43bd21fb613295d5b390954162&type=album',
    };
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: userProfile }));

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userProfile);
  });

  test('error fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
