export const getArticles = (search) => {
  const query = search ? `q=${search}&` : '';

  return fetch(`https://content.guardianapis.com/search?${query}show-fields=thumbnail&api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
  })
    .then(res => res.json())
    .then(resJSON => resJSON.response.results);
};
