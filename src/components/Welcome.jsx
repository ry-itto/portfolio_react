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
          <div>
            <p><a href='https://github.com/ry-itto'>ry-itto</a>のポートフォリオサイトになります。</p>
            <p>React の練習がてら作成したので生暖かい目で見てくださると嬉しいです。</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Welcome;
