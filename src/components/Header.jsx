import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

class Header extends Component{
  render() {
    return ( 
      <header>
        <NavigationBar />
      </header>
    )
  }
}

export default Header;