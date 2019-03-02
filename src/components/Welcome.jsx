import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Welcome extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{margin: 30}}>
          <p className='display-4'>Welcome to My Portfolio!</p>
          <p className='lead'>このサイトって？</p>
          <div>
            <p><a href='https://github.com/ry-itto'>ry-itto</a>のポートフォリオサイトになります。</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Welcome;
