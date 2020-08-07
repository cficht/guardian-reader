export const getArticles = () => {
  return fetch(`https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
  })
    .then(res => res.json())
    .then(resJSON => resJSON.response.results)
}