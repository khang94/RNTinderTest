import {getUserAPI} from './../../services/fetchUserApi';

const showLoading = handleState => {
  handleState({
    loading: true,
  });
};

const fetchUser = (handleState, state) => {
  showLoading(handleState);
  getUserAPI().then(res => {
    if (res && res.results[0]) {
      const {user} = res.results[0];

      const updatedUsers = [...state.users, user];
      handleState({
        users: updatedUsers,
        currentUser: user,
        loading: false,
      });
    }
  });
};

export default {
  showLoading,
  fetchUser,
};
