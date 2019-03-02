import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink disabled href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Links</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default NavigationBar;