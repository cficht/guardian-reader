import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

export default function Search({ searchText, handleSearchText, handleSearchSubmit }) {
  return (
    <section className="search-section">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchText} onChange={handleSearchText}/>
        <button>Search</button>
      </form>
    </section>
  );
}

Search.propTypes = {
  searchText: PropTypes.string,
  handleSearchText: PropTypes.func,
  handleSearchSubmit: PropTypes.func
};
