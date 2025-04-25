import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainForm from './MainForm';
import LoginForm from './LoginForm';
import Home from './Home';
import Order from './Order';
import Category from './Category';
import Cart from './Cart';
import Product1 from './Product1';
// import ProductCard from './Card';

function App() {
  const isLoggedIn = localStorage.getItem("userDetails");
  // const isHomeClicked = localStorage.getItem("isHomeClicked")
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/mainForm" /> : <LoginForm />
        }
      />
      <Route path="/mainForm" element={<MainForm />}>
        <Route path="/mainForm/home" element={<Home />} />
        <Route path="/mainForm/home/product1" element={<Product1 />} />
          {/* <Route path="/mainForm/home" element={ isHomeClicked ? <Navigate to="/product1"/> : <Home/>}/> */}
        <Route path="/mainForm/category" element={<Category />} />
        <Route path="/mainForm/orders" element={<Order />} />
        <Route path="/mainForm/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;