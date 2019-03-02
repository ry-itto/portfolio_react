import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import facebook_profile_image from '../assets/images/facebook_profile_image.jpg';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{margin: 30}}>
          <p className='display-4'>Profile</p>
          {/* <img src={ facebook_profile_image } alt='My profile image' widrh='200px' height='200px' /> */}
          <Table striped>
            <tbody>
              <tr>
                <td>名前</td>
                <td>伊藤 凌也</td>
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
