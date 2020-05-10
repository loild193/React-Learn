import React from 'react';

import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import { CartProvider } from './contexts/Cart';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
        </div>
        <Switch>
          <Route path="/products/">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
