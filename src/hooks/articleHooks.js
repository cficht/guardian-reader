import { useState, useEffect } from 'react';
import { getArticles } from '../services/guardian-api';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(articles => setArticles(articles));
  }, []);

  return {
    articles
  };
};
