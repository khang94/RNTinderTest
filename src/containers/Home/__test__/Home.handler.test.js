import Handlers from '../Home.handlers';
import SampleUserJson from '../../../assets/json/sample.json';

import {getUserAPI} from './../../../services/fetchUserApi';

const {showLoading, fetchUser} = Handlers;

jest.mock('./../../../services/fetchUserApi', () => ({
  getUserAPI: jest.fn(),
}));

describe('Home/Handlers', () => {
  it('Should test show loading', () => {
    const handleState = jest.fn();
    showLoading(handleState);
    expect(handleState).toBeCalledWith({loading: true});
  });

  it('Should fetch user data and update to state', () => {
    const handleState = jest.fn();
    const currentState = {
      users: [{...SampleUserJson}],
    };
    fetchUser(handleState, currentState);

    getUserAPI.mockImplementation = jest.fn(() => Promise.resolve(true));

    expect(handleState).toBeCalledWith({loading: true});
    // expect(getUserAPI).toBeCalledWith('123');
  });
});
