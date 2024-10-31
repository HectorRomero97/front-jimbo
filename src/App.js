import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserListPage from './pages/UserListPage';
import ProductListPage from './pages/ProductListPage';
import CreateProductPage from './pages/AddProductPage';
import AddProductPage from './pages/AddUserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={UserListPage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/create-product" component={CreateProductPage} />
        <Route path="/add-product" component={AddProductPage} />
      </Switch>
    </Router>
  );
}

export default App;