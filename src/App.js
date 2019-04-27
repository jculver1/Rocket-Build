import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarPage from './components/nav';
import HomePage from './components/Home';
import FooterPage from './components/footer'
import ProgramsPage from './components/programs'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <FooterPage />
      </div>
    )
  }
}

export default App;
