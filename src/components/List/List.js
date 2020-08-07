import React from 'react';
import { useArticles } from '../../hooks/articleHooks';
import ListItem from './ListItem';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';

export default function List() {
  const { articles, searchText, page, maxPage, handleSearchText, handleSearch, handlePage, handlePerPage } = useArticles();

  const articleNodes = articles.map(article => <ListItem key={article.id} article={article}/>);

  return (
    <main>
      <article>
        <Search searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch} handlePerPage={handlePerPage}/>
      </article>
      <article>
        <ul>
          {articleNodes}
        </ul>
      </article>
      <article>
        <Pagination page={page} maxPage={maxPage} handlePage={handlePage}/>
      </article>
    </main>
  );
}
