import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavigationBar />
        <p> sample </p>
        <Footer />
      </div>
    )
  }
}

export default App;
