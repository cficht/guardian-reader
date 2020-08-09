/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

test('renders List.js correctly', () => {
  const tree = renderer
    .create(<List />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
