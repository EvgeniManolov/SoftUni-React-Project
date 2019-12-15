import React from 'react';
import CarouselItem from './CarouselItem';
import {shallow} from 'enzyme';

it('renders OrderReceived4 component', () => {
    const wrapper = shallow(<CarouselItem/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<CarouselItem/>)
  expect(wrapper).toMatchSnapshot();
});
