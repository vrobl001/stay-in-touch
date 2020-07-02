import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import userService from './utils/userService';
import styles from './App.css';

// Reusable Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// Page Components
import Home from './pages/Home/Home';
import AddressBook from './pages/AddressBook/AddressBook';
import Calendar from './pages/Calendar/Calendar';
import Chat from './pages/Chat/Chat';
import GroceryList from './pages/GroceryList/GroceryList';
import Login from './pages/Login/Login';
import Photos from './pages/Photos/Photos';
import Signup from './pages/Signup/Signup';

class App extends Component {
  state = {
    user: userService.getUser(),
    webApps: [
      {
        name: 'Address Book',
        link: '/addressbook',
        icon: 'contacts',
      },
      {
        name: 'Calendar',
        link: '/calendar',
        icon: 'event',
      },
      {
        name: 'Chat',
        link: '/chat',
        icon: 'chat',
      },
      {
        name: 'Grocery List',
        link: '/grocerylist',
        icon: 'restaurant',
      },
      {
        name: 'Photos',
        link: '/photos',
        icon: 'camera_alt',
      },
    ],
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
      <div className={'app-outer-container'}>
        <Navbar user={this.state.user} handleLogout={this.handleLogout} />
        <div className='app-inner-container'>
          <div className='sidebar-container'>
            <Sidebar webApps={this.state.webApps} />
          </div>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Home webApps={this.state.webApps} />}
            />
            <Route exact path='/addressbook' render={() => <AddressBook />} />
            <Route exact path='/calendar' render={() => <Calendar />} />
            <Route exact path='/chat' render={() => <Chat />} />
            <Route exact path='/grocerylist' render={() => <GroceryList />} />
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
            <Route exact path='/photos' render={(props) => <Photos />} />
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
