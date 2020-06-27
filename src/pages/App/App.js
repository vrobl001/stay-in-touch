import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// Reusable Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='app-outer-container'>
        <Navbar />
        <div className='app-inner-container'>
          <h1>Test</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
