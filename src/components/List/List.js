import React from 'react';
import { useArticles } from '../../hooks/articleHooks';
import ListItem from './ListItem';

export default function List() {
  const { articles } = useArticles();

  const articleNodes = articles.map(article => <ListItem key={article.id} article={article}/>);

  return (
    <main>
      <ul>
        {articleNodes}
      </ul>
    </main>
  );
}
