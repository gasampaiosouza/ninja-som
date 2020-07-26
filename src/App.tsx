import React from 'react';
import './App.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import News from './components/News';
import Products from './components/Products';
import Companies from './components/Companies';
import About from './components/About';
import Comments from './components/Comments';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <Banner />
    <Categories />
    <News />
    <Products />
    <Companies />
    <About />
    <Comments />
    <Footer />
  </>
);

export default App;
