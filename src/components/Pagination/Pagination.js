import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ page, maxPage, handlePage }) {
  return (
    <section>
      <button onClick={() => handlePage(-1)} disabled={page <= 1}>&larr;</button>
      <button onClick={() => handlePage(1)} disabled={page >= maxPage}>&rarr;</button>
    </section>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  maxPage: PropTypes.number,
  handlePage: PropTypes.func
};
