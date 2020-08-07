import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ searchText, handleSearchText, handleSearch }) {

  return (
    <section>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchText} onChange={handleSearchText}/>
        <button>Search</button>
      </form>
    </section>
  );
}

Search.propTypes = {
  searchText: PropTypes.string,
  handleSearchText: PropTypes.func,
  handleSearch: PropTypes.func
};
