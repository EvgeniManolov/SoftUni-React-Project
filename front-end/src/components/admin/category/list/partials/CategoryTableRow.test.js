

import React from 'react';
import CategoryTableRow from './CategoryTableRow';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CategoryTableRow />).toJSON();
  expect(tree).toMatchSnapshot();
});