import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainForm from './MainForm';
import LoginForm from './LoginForm';
import Profile from './Profile';
import Order from './Order';
import Category from './Category';
import Cart from './Cart';

function App() {
  const isLoggedIn = localStorage.getItem("userDetails");
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/mainForm" /> : <LoginForm />
        }
      />
      <Route path="/mainForm" element={<MainForm />}>
        <Route path="/mainForm/profile" element={<Profile />} />
        <Route path="/mainForm/category" element={<Category />} />
        <Route path="/mainForm/orders" element={<Order />} />
        <Route path="/mainForm/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;