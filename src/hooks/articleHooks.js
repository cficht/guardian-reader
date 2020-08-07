import { useState, useEffect } from 'react';
import { getArticles } from '../services/guardian-api';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    getArticles(searchText, page)
      .then(results => {
        setArticles(results.articles);
        setMaxPage(results.pages);
      });
  }, [page]);

  const handleSearchText = ({ target }) => setSearchText(target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    getArticles(searchText, 1)
      .then(newResults => {
        setArticles(newResults.articles);
        setMaxPage(newResults.pages);
      });
  };

  const handlePage = (incDec) => {
    setPage(page => setPage(page + incDec));
  };

  return {
    articles,
    searchText,
    page,
    maxPage,
    handleSearchText,
    handleSearch,
    handlePage
  };
};
