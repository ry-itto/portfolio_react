import React, { Component } from 'react';
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ry-itto's portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/welcome" tag={RRNavLink}> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile" tag={RRNavLink}>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/links" tag={RRNavLink}>Links</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar;