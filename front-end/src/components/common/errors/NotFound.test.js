import React from 'react';
import NotFound from './NotFound';
import {shallow} from 'enzyme';

it('renders NotFound component', () => {
    const wrapper = shallow(<NotFound/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<NotFound/>)
  expect(wrapper).toMatchSnapshot();
});
