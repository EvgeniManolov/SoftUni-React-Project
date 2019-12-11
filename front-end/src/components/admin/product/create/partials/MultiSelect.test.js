import React from 'react';
import MultiSelect from './MultiSelect';
import {shallow} from 'enzyme';

it('renders MultiSelect component', () => {
    const wrapper = shallow(<MultiSelect/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<MultiSelect/>)
  expect(wrapper).toMatchSnapshot();
});
