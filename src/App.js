import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Link from './components/Link';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/profile' component={Profile} />
            <Route path='/links' component={Link} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
