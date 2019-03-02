import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink to="/welcome" activeClassName="active" tag={RRNavLink} > Home </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" activeClassName="active" tag={RRNavLink} >Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/links" activeClassName="active" tag={RRNavLink} >Links</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default NavigationBar;