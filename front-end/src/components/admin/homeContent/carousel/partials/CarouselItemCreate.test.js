import React from 'react';
import CarouselItemCreate from './CarouselItemCreate';
import {shallow} from 'enzyme';

it('renders OrderReceived4 component', () => {
    const wrapper = shallow(<CarouselItemCreate/>)
    expect(wrapper).toBeTruthy();
});

it('check for html changes', () => {
  const wrapper = shallow(<CarouselItemCreate/>)
  expect(wrapper).toMatchSnapshot();
});
