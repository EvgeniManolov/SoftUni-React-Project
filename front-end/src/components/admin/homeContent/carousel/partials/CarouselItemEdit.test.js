import React from 'react';
import CarouselItemEdit from './CarouselItemEdit';
import {shallow} from 'enzyme';

it('renders OrderReceived4 component', () => {
    const wrapper = shallow(<CarouselItemEdit/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<CarouselItemEdit/>)
  expect(wrapper).toMatchSnapshot();
});
