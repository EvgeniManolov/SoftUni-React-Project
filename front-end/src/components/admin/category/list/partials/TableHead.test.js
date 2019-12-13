import React from 'react';
import TableHead from './TableHead';
import {shallow} from 'enzyme';

it('renders TableHead component', () => {
    const wrapper = shallow(<TableHead/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<TableHead/>)
  expect(wrapper).toMatchSnapshot();
});
