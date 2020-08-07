import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ article }) {
  if(!article) return null;

  return (
    <li>
      <a href={article.webUrl}><h3>{article.webTitle}</h3></a>
      <img src={article.fields?.thumbnail} alt="Article Thumbnail"/>
    </li>
  );
}

ListItem.propTypes = {
  article: PropTypes.object
};
