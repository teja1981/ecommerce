import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProductPage from './pages/AddProductPage';
import ProductPage from './pages/ProductPage';
import Layout from './components/Layout';
import { CartProvider } from './pages/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="all-products" element={<ProductPage />} />
            <Route path="addProduct" element={<AddProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
