import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

class Header extends Component{
  render() {
    return ( 
      <header className='sticky-top'>
        <NavigationBar />
      </header>
    )
  }
}

export default Header;