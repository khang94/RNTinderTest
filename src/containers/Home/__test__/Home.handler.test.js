import Handlers from '../Home.handlers';
import SampleResponseJson from '../../../assets/json/sample.json';

import {getUserAPI} from './../../../services/fetchUserApi';

const {showLoading, fetchUser} = Handlers;

jest.mock('./../../../services/fetchUserApi', () => ({
  getUserAPI: jest.fn(() => Promise.resolve({...SampleResponseJson})),
}));

describe('Home/Handlers', () => {
  beforeAll(done => {
    done();
  });

  it('Should test show loading', () => {
    const handleState = jest.fn();
    showLoading(handleState);
    expect(handleState).toBeCalledWith({loading: true});
  });

  it('Should fetch user data and update to state', done => {
    const handleState = jest.fn();
    const currentState = {
      users: [],
    };
    fetchUser(handleState, currentState);

    expect(handleState).toBeCalledWith({loading: true});

    getUserAPI().then(res => {
      expect(res.results[0].user).not.toBe(null);
      expect(handleState).toBeCalled();
      done();
    });
  });
});
