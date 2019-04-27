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
        {/* <Route path="/" exact component={Home} />
        <Route path="/programs" exact component={programs} /> */}
        <HomePage />
        <ProgramsPage />
        <FooterPage />
      </div>
    )
  }
}

export default App;
