import reducer, {actions} from './../Favourite.reducer';

describe('AddFavouriteUser', () => {
  it('should add favourite user to store when user is not existed', () => {
    const state = {
      users: [],
    };

    const favouriteUser = {
      phone: '123456',
      location: 'New York Street',
      sha1: '1234',
    };

    const expectState = {users: [{...favouriteUser}]};

    const nextState = reducer(
      state,
      actions.addFavouriteUser({
        user: favouriteUser,
      }),
    );
    expect(nextState).toEqual(expectState);
  });

  it('should not allow add duplicate favourite user', () => {
    const favouriteUser = {
      phone: '123456',
      location: 'New York Street',
      sha1: '1234',
    };

    const state = {
      users: [{...favouriteUser}],
    };

    const expectState = {users: [{...favouriteUser}]};

    const nextState = reducer(
      state,
      actions.addFavouriteUser({
        user: favouriteUser,
      }),
    );
    console.log('NextState', nextState);
    expect(nextState).toEqual(expectState);
  });
});
