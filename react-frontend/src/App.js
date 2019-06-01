import React, { Component } from 'react';
import './style/App.css';
import Navbar from './components/common/Navbar.js';
import Footer from './components/common/Footer.js';
import Home from './components/pages/home/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
