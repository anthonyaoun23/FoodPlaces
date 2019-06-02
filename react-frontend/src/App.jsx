import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style/App.css';

import Navbar from './components/common/Navbar.js';
import Footer from './components/common/Footer.js';
import Home from './components/pages/home/Home.js';
import Cart from './components/pages/cart/Cart';
import Payment from './components/pages/payment/Payment';
import RestoList from './components/pages/resto-list/RestoList';
import RestoMenu from './components/pages/resto-menu/RestoMenu';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Home} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/list' component={RestoList} />
          <Route exact path='/menu' component={RestoMenu} />
        </div>
      </Router>
    );
  }
}

export default App;
