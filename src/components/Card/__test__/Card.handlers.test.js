import Handlers from './../Card.handlers';

describe('Components/Card/CardHandlers', () => {
  const user = {
    email: 'test@gmail.com',
    birthday: 'birthdayMock',
    location: {
      street: '12345 Ave street',
    },
    phone: 123456,
    password: '909090',
    name: {
      first: 'Steve',
      last: 'Job',
    },
  };

  it('Should get user phone', () => {
    const activeTab = 'phone';

    const result = Handlers.getUserInformation(activeTab, user);
    expect(result).toEqual({
      title: 'My phone number is',
      content: user.phone,
    });
  });

  it('Should get user password', () => {
    const activeTab = 'password';

    const result = Handlers.getUserInformation(activeTab, user);
    expect(result).toEqual({
      title: 'My password is',
      content: user.password,
    });
  });

  it('Should get user location', () => {
    const activeTab = 'location';

    const result = Handlers.getUserInformation(activeTab, user);
    expect(result).toEqual({
      title: 'My address is',
      content: user.location.street,
    });
  });

  it('Should get user birthday', () => {
    const activeTab = 'birthday';

    const result = Handlers.getUserInformation(activeTab, user);
    expect(result).toEqual({
      title: 'My birthday is',
      content: user.birthday,
    });
  });

  it('Should get user email', () => {
    const activeTab = 'email';

    const result = Handlers.getUserInformation(activeTab, user);
    expect(result).toEqual({
      title: 'My email is',
      content: user.email,
    });
  });

  it('Should get user fullname', () => {
    const activeTab = 'fullname';

    const result = Handlers.getUserInformation(activeTab, user);
    expect(result).toEqual({
      title: 'Hello, My name is',
      content: 'Steve Job',
    });
  });
});
