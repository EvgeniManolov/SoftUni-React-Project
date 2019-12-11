import React from 'react';
import EditCreateProduct from './EditCreateProduct';
import {shallow} from 'enzyme';

it('renders correctly', () => {
    const wrapper = shallow(<EditCreateProduct/>)
    expect(wrapper).toMatchSnapshot();
  });
