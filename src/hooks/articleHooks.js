import { useState, useEffect } from 'react';
import { getArticles } from '../services/guardian-api';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [searchObject, setSearchObject] = useState({ query: '', page: 1 });
  const [searchText, setSearchText] = useState('');
  const [maxPage, setMaxPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setGetError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(searchObject)
      .then(results => {
        setArticles(results.articles);
        setMaxPage(results.pages);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setGetError('Cannot retrieve articles...');
      });
  }, [searchObject]);

  // SEARCH
  const handleSearchText = ({ target }) => setSearchText(target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchObject({ query: searchText, page: 1 });
  };

  // PAGINATION
  const handlePage = (incDec) => setSearchObject({ ...searchObject, page: searchObject.page + incDec });

  return {
    articles,
    searchObject,
    searchText,
    maxPage,
    isLoading,
    getError,
    handleSearchText,
    handleSearchSubmit,
    handlePage
  };
};
