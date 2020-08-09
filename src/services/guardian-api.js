export const getArticles = ({ query, page }) => {
  const search = query ? `q=${query}&` : '';
  const pageNum = `page=${page}`;

  return fetch(`https://content.guardianapis.com/search?${search}${pageNum}&show-fields=thumbnail&api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
  })
    .then(res => res.json())
    .then(resJson => ({ articles: resJson.response.results, pages: resJson.response.pages }));
};
