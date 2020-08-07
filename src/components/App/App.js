import React from 'react';
import { getArticles } from '../../services/guardian-api'
import './App.css';

function App() {
  const articles = () => {
    getArticles()
    .then(res => console.log(res))
  }

  articles();

  return (
    <div className="App">
      Guardian Reader
    </div>
  );
}

export default App;
