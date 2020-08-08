import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

export default function Search({ searchText, handleSearchText, handleSearch, handlePerPage }) {
  return (
    <section className="search-section">
      <form onSubmit={handleSearch}>
        <div className="search-div">
          <input type="text" value={searchText} onChange={handleSearchText}/>
          <button>Search</button>
        </div>
        <div className="per-page-div">
          <label>Articles Per Page:
            <select onChange={handlePerPage}>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </label>   
        </div> 
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
