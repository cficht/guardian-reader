import { useState, useEffect } from 'react';
import { getArticles } from '../services/guardian-api';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getArticles()
      .then(articles => setArticles(articles));
  }, [searchText]);

  const handleSearchText = ({ target }) => setSearchText(target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    getArticles(searchText)
      .then(newArticles => setArticles(newArticles));
  };

  return {
    articles,
    searchText,
    handleSearchText,
    handleSearch
  };
};
