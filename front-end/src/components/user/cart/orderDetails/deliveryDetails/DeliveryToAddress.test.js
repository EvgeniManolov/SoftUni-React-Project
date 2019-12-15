import React from 'react';
import DeliveryToAddress from './DeliveryToAddress';
import {shallow} from 'enzyme';

it('renders correctly', () => {
   
    const wrapper = shallow(<DeliveryToAddress params = {{city: "City"}}/>)
    expect(wrapper).toMatchSnapshot();
  });


  it('check for html changes', () => {
   
    const wrapper = shallow(<DeliveryToAddress params = {{city: "City"}}/>)
    expect(wrapper).toBeTruthy();
});