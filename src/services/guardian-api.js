export const getArticles = (search, page) => {
  const query = search ? `q=${search}&` : '';

  return fetch(`https://content.guardianapis.com/search?${query}&page=${page}&show-fields=thumbnail&api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
  })
    .then(res => res.json())
    .then(resJson => ({ articles: resJson.response.results, pages: resJson.response.pages }));
};
