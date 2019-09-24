import Constants from '../../config/Constants';

const {UserInfo} = Constants;

const normalizeFullname = user => {
  const fullName = `${user.name.first} ${user.name.last}`;
  return fullName.charAt(0).toUpperCase() + fullName.slice(1);
};

const getUserInformation = (activeTab, user) => {
  let title;
  let content;
  switch (activeTab) {
    case UserInfo.Email:
      title = 'My email is';
      content = user.email;
      break;
    case UserInfo.Birthday:
      title = 'My birthday is';
      content = user.birthday;
      break;
    case UserInfo.Location:
      title = 'My address is';
      content = user.location.street;
      break;
    case UserInfo.Phone:
      title = 'My phone number is';
      content = user.phone;
      break;
    case UserInfo.Password:
      title = 'My password is';
      content = user.password;
      break;
    default:
      title = 'Hello, My name is';
      content = normalizeFullname(user);
      break;
  }
  return {
    title,
    content,
  };
};

export default {
  getUserInformation,
};
