import {createAction, handleActions} from 'redux-actions';

const stateName = 'favourite';

const ADD_FAVOURITE_USER = 'FAVOURITE/ADD_FAVOURITE_USER';

const addFavouriteUserAction = createAction(ADD_FAVOURITE_USER);

const actions = {
  addFavouriteUser: addFavouriteUserAction,
};

const defaultState = {
  users: [],
};

const addFavouriteUser = (state, {payload}) => {
  const {user} = payload;
  let favouriteUserUpdated = [...state.users];

  const isUserExisted =
    favouriteUserUpdated.findIndex(u => u.sha1 === user.sha1) !== -1;

  if (!isUserExisted) {
    favouriteUserUpdated.push(user);
  }

  return {
    ...state,
    users: favouriteUserUpdated,
  };
};

export {stateName, actions};

export default handleActions(
  {
    [addFavouriteUserAction]: addFavouriteUser,
  },
  defaultState,
);
