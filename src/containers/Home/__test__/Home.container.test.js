import React from 'react';

import {HomeContainer} from '../Home.container';
import {shallow} from 'enzyme';

import Handlers from '../Home.handlers';

describe('HomeContainer snapshot', () => {
  const props = {
    addFavouriteUser: jest.fn(),
  };

  const user = {
    name: {
      first: 'Steve',
      last: 'Job',
    },
  };

  it('Should render snapshot', () => {
    const wrapper = shallow(<HomeContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should save to favourite user store if swipe right', () => {
    const wrapper = shallow(<HomeContainer {...props} />);

    wrapper.setState({currentUser: user});
    wrapper.instance().onSwipedRight();
    expect(props.addFavouriteUser).toBeCalledWith({user});
  });

  it('Should save to favourite user store if swipe left', () => {
    const wrapper = shallow(<HomeContainer {...props} />);

    Handlers.fetchUser = jest.fn();
    wrapper.setState({currentUser: user});
    wrapper.instance().onSwipedLeft();
    expect(Handlers.fetchUser).toBeCalled();
  });

  it('Should render card item based on current user data after fetched ', () => {
    const wrapper = shallow(<HomeContainer {...props} />);
    wrapper.setState({currentUser: user, loading: false});

    expect(wrapper.instance().renderCard()).toMatchSnapshot();
  });

  it('Should render loading state in card while fetching data ', () => {
    const wrapper = shallow(<HomeContainer {...props} />);
    wrapper.setState({currentUser: user, loading: true});

    expect(wrapper.instance().renderCard()).toMatchSnapshot();
  });
});
