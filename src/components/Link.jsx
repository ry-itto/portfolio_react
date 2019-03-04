import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, Button, Col, Row } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

class Link extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{margin: 30}}>
          <p className='display-4'>Links</p>
          <Row>
            <Col sm='6'>
              <Card body>
                <CardHeader>GitHub</CardHeader>
                <CardBody>
                  <CardText>GitHubのプロフィールページへのリンク</CardText>
                  <Button outline color='primary' href='https://github.com/ry-itto'>GitHub</Button>
                </CardBody>
              </Card>
            </Col>            
            <Col sm='6'>
              <Card body>
                <CardTitle>ポートフォリオのリポジトリ</CardTitle>
                <Button outline color='primary' href='https://github.com/ry-itto/portfolio_react'>GitHub</Button>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Link;