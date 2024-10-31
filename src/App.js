import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import ProductListPage from './pages/ProductListPage';
import AddUserPage from './pages/AddUserPage';
import AddProductPage from './pages/AddProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/users" element={<UserListPage/>} />
        <Route path="/products" element={<ProductListPage/>} />
        <Route path="/create-user" element={<AddUserPage/>} />
        <Route path="/create-product" element={<AddProductPage/>} />
      </Routes>
    </Router>
  );
}

export default App;