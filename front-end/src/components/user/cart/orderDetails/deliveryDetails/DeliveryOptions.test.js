import React from 'react';
import DeliveryOptions from './DeliveryOptions';
import {shallow} from 'enzyme';

it('renders correctly', () => {
    const wrapper = shallow(<DeliveryOptions/>)
    expect(wrapper).toMatchSnapshot();
  });


  it('check for html changes', () => {
    const wrapper = shallow(<DeliveryOptions/>)
    expect(wrapper).toBeTruthy();
});