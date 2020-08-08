import React from 'react';
import ListItem from './ListItem';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import { useArticles } from '../../hooks/articleHooks';
import './List.scss';

export default function List() {
  const { articles, searchText, page, maxPage, isLoading, getError, handleSearchText, handleSearch, handlePage } = useArticles();

  const articleNodes = articles.map(article => <ListItem key={article.id} article={article}/>);

  return (
    <main>
      <article className="search-container">
        <Search searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch}/>
      </article>
      <article className="list-container">
        <ul>
          { isLoading ? <h3>Loading...</h3> : articleNodes}
          { getError ? getError : null}
        </ul>
      </article>
      { isLoading || getError ? null : 
        <article className="pagination-container">
          <Pagination page={page} maxPage={maxPage} handlePage={handlePage}/>
        </article>
      }
    </main>
  );
}
