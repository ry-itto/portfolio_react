import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Welcome extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Welcome</p>
        <Footer />
      </div>
    )
  }
}

export default Welcome;
