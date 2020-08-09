/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

test('renders Pagination.js correctly', () => {
  const tree = renderer
    .create(<Pagination />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
