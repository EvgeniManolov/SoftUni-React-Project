import React from 'react';
import AddImageForm from './AddImageFrom';
import {shallow} from 'enzyme';

it('renders AddImageForm component', () => {
    const wrapper = shallow(<AddImageForm/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<AddImageForm/>)
  expect(wrapper).toMatchSnapshot();
});
