import React from 'react';
import Comment from './Comment';
import {shallow} from 'enzyme';

it('renders correctly', () => {
    const wrapper = shallow(<Comment/>)
    expect(wrapper).toMatchSnapshot();
  });


  it('check for html changes', () => {
    const wrapper = shallow(<Comment/>)
    expect(wrapper).toBeTruthy();
});