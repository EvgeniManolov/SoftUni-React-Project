import React from 'react';
import ProductTableRow from './ProductTableRow';
import {shallow} from 'enzyme';

it('renders ProductTableRow component', () => {
    const wrapper = shallow(<ProductTableRow/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<ProductTableRow/>)
  expect(wrapper).toMatchSnapshot();
});
