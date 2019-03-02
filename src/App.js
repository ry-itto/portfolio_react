import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Link from './components/Link';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Welcome} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/profile' component={Profile} />
          <Route path='/links' component={Link} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
