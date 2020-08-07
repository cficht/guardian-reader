import { useState, useEffect } from 'react';
import { getArticles } from '../services/guardian-api';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setGetError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page, perPage, searchText)
      .then(results => {
        setArticles(results.articles);
        setMaxPage(results.pages);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setGetError('Cannot retrieve articles');
      });
  }, [page]);

  const handleSearchText = ({ target }) => setSearchText(target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getArticles(1, perPage, searchText)
      .then(newResults => {
        setPage(1);
        setArticles(newResults.articles);
        setMaxPage(newResults.pages);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setGetError('Cannot retrieve articles');
      });
  };

  const handlePage = (incDec) => {
    setPage(page => setPage(page + incDec));
  };

  const handlePerPage = ({ target }) => setPerPage(Number(target.value));

  return {
    articles,
    searchText,
    page,
    maxPage,
    isLoading,
    getError,
    handleSearchText,
    handleSearch,
    handlePage,
    handlePerPage
  };
};
