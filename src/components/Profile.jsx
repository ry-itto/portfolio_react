import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{margin: 30}}>
          <p className='display-4'>Profile</p>
          <Table striped>
            <tbody>
              <tr>
                <td>ユーザー名</td>
                <td>ry-itto</td>
              </tr>
              <tr>
                <td>大学</td>
                <td>会津大学</td>
              </tr>
              <tr>
                <td>出身地</td>
                <td>北海道</td>
              </tr>
              <tr>
                <td>好きな言語</td>
                <td>Ruby</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Profile;
