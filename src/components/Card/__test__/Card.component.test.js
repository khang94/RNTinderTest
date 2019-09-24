import React from 'react';

import CardComponent from '../Card.component';
import {shallow} from 'enzyme';

jest.mock('../Card.handlers', () => ({
  getUserInformation: jest.fn(),
}));

describe('CardComponent snapshot', () => {
  const props = {
    avatar: 'url/123',
    user: {
      name: {
        first: 'Steve',
        last: 'Job',
      },
      location: {
        street: '',
      },
      phone: '',
      email: '',
      password: '',
    },
  };

  it('Should render snapshot for card view', () => {
    const wrapper = shallow(<CardComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should check initial state', () => {
    const wrapper = shallow(<CardComponent {...props} />);
    const componentState = wrapper.state();
    expect(componentState.activeTab).toEqual('location');
  });

  it('Should active phone tab', () => {
    const wrapper = shallow(<CardComponent {...props} />);
    const instance = wrapper.instance();
    instance.onSelectItem('phone');
    expect(wrapper.state().activeTab).toEqual('phone');
  });
});
