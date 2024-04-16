import {Routes, Route} from 'react-router-dom'
import React from "react";
import Home from "./components/Home/Home";
import Products from './components/Products/Products';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Article from './components/Article/Article'
import Cart from './components/Cart/Cart';
import Notfound from './components/NotFound/NotFound';
import SingleProduct from './components/singleProduct/SingleProduct';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct" element={<SingleProduct />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      
    </>
  )
}

export default App;
