import { useState, useEffect } from 'react';
import { getArticles } from '../services/guardian-api';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getArticles()
      .then(articles => setArticles(articles));
  }, []);

  const handleSearchText = ({ target }) => setSearchText(target.value);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return {
    articles,
    searchText,
    handleSearchText,
    handleSearch
  };
};
