import React from 'react';
import { useArticles } from '../../hooks/articleHooks';

export default function Search() {
  const { searchText, handleSearchText, handleSearch } = useArticles();

  return (
    <section>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchText} onChange={handleSearchText}/>
        <button>Search</button>
      </form>
    </section>
  );
}
