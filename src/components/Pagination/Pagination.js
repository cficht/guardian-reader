import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

export default function Pagination({ page, maxPage, handlePage }) {
  return (
    <section className="pagination-section">
      <button onClick={() => handlePage(-1)} disabled={page <= 1}>&larr;</button>
      <h3>{page} / {maxPage}</h3>
      <button onClick={() => handlePage(1)} disabled={page >= maxPage}>&rarr;</button>
    </section>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  maxPage: PropTypes.number,
  handlePage: PropTypes.func
};
