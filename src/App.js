import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/nav.js';
import FooterPage from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
         <FooterPage/>
      </div>
    )
  }
}

export default App;
