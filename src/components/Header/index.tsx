import React from 'react';
import TopBar from './TopBar';
import Info from './Info';
import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <header id="header">
      <TopBar />
      <Info />
      <Nav />
    </header>
  );
};

export default Header;
