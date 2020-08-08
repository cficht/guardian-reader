import React from 'react';
import ListItem from './ListItem';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import { useArticles } from '../../hooks/articleHooks';
import './List.scss';

export default function List() {
  const { articles, searchObject, searchText, maxPage, isLoading, getError, handleSearchText, handleSearchSubmit, handlePage } = useArticles();

  const articleNodes = articles.map(article => <ListItem key={article.id} article={article}/>);

  const pageConditions = () => {
    if(isLoading) return (
      <article className="list-container">
        <h3>Loading...</h3>
      </article>
    ); 
    else if(getError) return (
      <article className="list-container">
        <h3>{getError}</h3>
      </article>
    );
    else if(articles.length < 1) return (
      <article className="list-container">
        <h3>No articles found...</h3>
      </article>
    );
    else return (
      <>
        <article className="list-container">
          <ul>
            {articleNodes}
          </ul>
        </article>
        { maxPage === 0 || getError ? null : 
          <article className="pagination-container">
            <Pagination page={searchObject.page} maxPage={maxPage} handlePage={handlePage}/>
          </article>
        }
      </>
    );
  };

  return (
    <main>
      <article className="search-container">
        <Search searchText={searchText} handleSearchText={handleSearchText} handleSearchSubmit={handleSearchSubmit}/>
      </article>
      {pageConditions()}
    </main>
  );
}
