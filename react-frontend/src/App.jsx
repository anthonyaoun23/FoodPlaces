import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style/App.css';
import './style/main.css';

import Navbar from './components/common/Navbar.js';
import Footer from './components/common/Footer.js';
import Home from './components/pages/home/Home';
import Cart from './components/pages/cart/Cart';
import Payment from './components/pages/payment/Payment';
import RestoList from './components/pages/resto-list/RestoList';
import RestoMenu from './components/pages/resto-menu/RestoMenu';

import Test from './components/pages/test/Test';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/list' component={RestoList} />
            <Route exact path='/menu' component={RestoMenu} />
            <Route render={ () => <h1>404 Error</h1> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
