export const getArticles = (pageNum, perPage, search) => {
  const page = `page=${pageNum}`;
  const pageSize = `page-size=${perPage}`;
  const query = search ? `q=${search}&` : '';

  return fetch(`https://content.guardianapis.com/search?${query}${page}&${pageSize}&show-fields=thumbnail&api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
  })
    .then(res => res.json())
    .then(resJson => ({ articles: resJson.response.results, pages: resJson.response.pages }));
};
