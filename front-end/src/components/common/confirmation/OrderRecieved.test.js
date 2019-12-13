import React from 'react';
import OrderReceived4 from './OrderReceived4';
import {shallow} from 'enzyme';

it('renders OrderReceived4 component', () => {
    const wrapper = shallow(<OrderReceived4/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<OrderReceived4/>)
  expect(wrapper).toMatchSnapshot();
});
