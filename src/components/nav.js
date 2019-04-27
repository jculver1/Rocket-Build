import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Home';
import ProgramsPage from './programs';
import StaffPage from './staff'


class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar className="staticColor" expand="md">
          <MDBNavbarBrand>
            <img className="logo" src="Augustana_Logo.png" alt="logo"></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className="nav" right>
              {/* <MDBNavItem active> */}
              <Link className="navItems" to="/">Home</Link>
              {/* </MDBNavItem> */}
              {/* <MDBNavItem > */}
              <Link className="navItems" to="#!">Why us?</Link>
              {/* </MDBNavItem>
              <MDBNavItem > */}
              <Link className="navItems" to="/ProgramsPage">Programs</Link>
              {/* </MDBNavItem>
              <MDBNavItem > */}
              <Link className="navItems" to="/StaffPage">Staff</Link>
              {/* </MDBNavItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>



        <Route path="/" exact component={HomePage} />
        {/* <Route path="/whyus" component={userBook} /> */}
        <Route path="/ProgramsPage" component={ProgramsPage} />
        <Route path="/StaffPage" component={StaffPage} />

      </Router>
    );
  }
}

export default NavbarPage;