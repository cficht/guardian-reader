import React from 'react';
import Logo from '../../assets/guardian_logo.png';
import './Header.scss';

export default function Header() {
  return (
    <header>
      {/* <h1>Guardian Reader</h1> */}
      <img src={Logo} alt="Guardian Logo"/>
    </header>
  );
}
