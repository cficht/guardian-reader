import React from 'react';
import List from '../List/List';
import Header from '../Header/Header';
import './App.scss';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <List />
    </div>
  );
}
