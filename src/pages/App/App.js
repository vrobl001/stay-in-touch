import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import './App.css';

// Reusable Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Page Components
import Home from '../Home/Home';
import AddressBook from '../AddressBook/AddressBook';
import Calendar from '../Calendar/Calendar';
import ChatMessages from '../ChatMessages/ChatMessages';
import GroceryList from '../GroceryList/GroceryList';
import Login from '../Login/Login';
import PhotoBlog from '../PhotoBlog/PhotoBlog';
import Signup from '../Signup/Signup';

class App extends Component {
  state = {
    user: userService.getUser(),
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  handleLogout = () => {
    userService.logout();
    this.setState({
      user: userService.getUser(),
    });
  };

  render() {
    return (
      <div className='app-outer-container'>
        <Navbar user={this.state.user} handleLogout={this.handleLogout} />
        <div className='app-inner-container'>
          <Switch>
            <Route exact path='/' render={(props) => <Home />} />
            <Route
              exact
              path='/addressbook'
              render={(props) => <AddressBook />}
            />
            <Route exact path='/calendar' render={(props) => <Calendar />} />
            <Route
              exact
              path='/chatmessages'
              render={(props) => <ChatMessages />}
            />
            <Route
              exact
              path='/grocerylist'
              render={(props) => <GroceryList />}
            />
            <Route
              exact
              path='/login'
              render={(props) => (
                <Login
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route exact path='/photoblog' render={(props) => <PhotoBlog />} />
            <Route
              exact
              path='/signup'
              render={(props) => (
                <Signup
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
