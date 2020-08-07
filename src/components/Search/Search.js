import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ searchText, handleSearchText, handleSearch, handlePerPage }) {
  return (
    <section>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchText} onChange={handleSearchText}/>
        <button>Search</button>
        <label>
          Per Page:
          <select onChange={handlePerPage}>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
        </label>
        
      </form>
    </section>
  );
}

Search.propTypes = {
  searchText: PropTypes.string,
  handleSearchText: PropTypes.func,
  handleSearch: PropTypes.func,
  handlePerPage: PropTypes.func
};
