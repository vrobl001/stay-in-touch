import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

// Reusable Components
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  state = {

  };
  render() {
    return(
      <div className='outer-container'>
        <Navbar />
        <div className='inner-container'><h1>Test</h1></div>
      </div>
    );
  }
}

export default App;
