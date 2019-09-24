import React from 'react';

import UserDetails from '../UserDetails.component';
import {shallow} from 'enzyme';

describe('UserDetails snapshot', () => {
  const props = {
    title: 'title',
    content: 'content',
    activeTab: 'home',
    onSelectItem: jest.fn(),
  };

  it('Should render snapshot for user details view', () => {
    const wrapper = shallow(<UserDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render active location icon', () => {
    const componentProps = {
      ...props,
      activeTab: 'location',
    };
    const wrapper = shallow(<UserDetails {...componentProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render active birthday icon', () => {
    const componentProps = {
      ...props,
      activeTab: 'birthday',
    };
    const wrapper = shallow(<UserDetails {...componentProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render active email icon', () => {
    const componentProps = {
      ...props,
      activeTab: 'email',
    };
    const wrapper = shallow(<UserDetails {...componentProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render active password icon', () => {
    const componentProps = {
      ...props,
      activeTab: 'password',
    };
    const wrapper = shallow(<UserDetails {...componentProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render active phone icon', () => {
    const componentProps = {
      ...props,
      activeTab: 'phone',
    };
    const wrapper = shallow(<UserDetails {...componentProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render active account icon', () => {
    const componentProps = {
      ...props,
      activeTab: 'account',
    };
    const wrapper = shallow(<UserDetails {...componentProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
