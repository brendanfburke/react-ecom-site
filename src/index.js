import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Product from './components/Product';
import Cart from './pages/Cart';
import Confirmation from './pages/Confirmation';
import Home from './pages/Home';
import Item from './pages/Item';
import Seller from './pages/Seller';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item' element={<Item />} >
            <Route path='*' element={<Item />} />
          </Route>
          <Route path='/seller' element={<Seller />} >
            <Route path='*' element={<Seller />} />
          </Route>
          <Route path='/confirmation' element={<Confirmation />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
