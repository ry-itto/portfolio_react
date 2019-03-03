import React, { Component } from 'react';
import { Card, CardText, 
  CardTitle, Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

class Link extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{margin: 30}}>
          <p className='display-4'>Links</p>
          <div style={{width: 400}}>
            <Card body>
              <CardTitle>GitHub</CardTitle>
              <CardText>GitHubのプロフィールページへのリンク</CardText>
              <Button outline color='primary' href='https://github.com/ry-itto'>GitHub</Button>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Link;