import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Profile</p>
        <Footer />
      </div>
    )
  }
}

export default Profile;
