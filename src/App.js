import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/nav';
import HomePage from './components/Home';
import FooterPage from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <HomePage />
        <FooterPage />
      </div>
    )
  }
}

export default App;
