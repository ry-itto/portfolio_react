import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Link extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Links</p>
        <Footer />
      </div>
    );
  }
}

export default Link;