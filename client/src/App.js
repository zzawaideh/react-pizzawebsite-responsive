import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/hero/hero';
import Products from './components/products/products';
import { productData, productDataTwo } from './data/data';
import Featured from './components/featured/featured';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        <Featured />
        <Products heading='Sweet Treats for You' data={productDataTwo} />
        <Footer />
    </Router>
  );
}

export default App;
