import {getUserAPI, request} from '../fetchUserApi';

describe('Services/FetchUserAPI', () => {
  it('Fetch user data', async () => {
    const res = await getUserAPI();
    expect(res.results.length > 0).toBe(true);
    expect(Object.keys(res.results[0].user).length > 0).toBe(true);
  });

  it('should return error case and capture error', async () => {
    const err = await request('Get', 'api/1/12345', null);
    expect(err.status).toBe(404);
  });
});
