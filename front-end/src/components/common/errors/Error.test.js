import React from 'react';
import Error from './Error';
import {shallow} from 'enzyme';

it('renders Error component', () => {
    const wrapper = shallow(<Error/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<Error/>)
  expect(wrapper).toMatchSnapshot();
});
