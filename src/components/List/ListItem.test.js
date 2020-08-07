/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

test('renders ListItem.js correctly', () => {
  const tree = renderer
    .create(<ListItem />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
