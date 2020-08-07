/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

test('renders Search.js correctly', () => {
  const tree = renderer
    .create(<Search />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
