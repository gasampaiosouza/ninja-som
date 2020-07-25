import React from 'react';
import './App.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import News from './components/News';

const App = () => (
  <>
    <Header />
    <Banner />
    <Categories />
    <News />
  </>
);

export default App;
