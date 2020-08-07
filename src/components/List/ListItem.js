import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ article }) {
  return (
    <li>
      <h3>{article?.webTitle}</h3>
    </li>
  );
}

ListItem.propTypes = {
  article: PropTypes.object
};
