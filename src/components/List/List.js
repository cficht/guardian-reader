import React from 'react';
import { useArticles } from '../../hooks/articleHooks';
import ListItem from './ListItem';
import Search from '../Search/Search';

export default function List() {
  const { articles, searchText, handleSearchText, handleSearch } = useArticles();

  const articleNodes = articles.map(article => <ListItem key={article.id} article={article}/>);

  return (
    <main>
      <article>
        <Search searchText={searchText} handleSearchText={handleSearchText} handleSearch={handleSearch}/>
      </article>
      <article>
        <ul>
          {articleNodes}
        </ul>
      </article>
    </main>
  );
}
