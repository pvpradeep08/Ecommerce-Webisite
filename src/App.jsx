import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Context/CartContext'; 
import { SearchProvider } from './Context/SearchContext';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Footer from './Components/Footer/Footer';
import TitleUpdater from './Components/TitleUpdater/TitleUpdater';

const App = () => {
  return (
    <CartProvider> 
      <SearchProvider>
        <BrowserRouter>
          <TitleUpdater />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/category/:categoryName' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
};

export default App;
