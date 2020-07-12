import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import messageService from './utils/messageService';
import userService from './utils/userService';
import './App.css';

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
import Profile from './pages/Profile/Profile';

// Socket.io
import openSocket from 'socket.io-client';
const socket = openSocket();

class App extends Component {
  state = {
    messages: [],
    showSidebar: false,
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

  handleGetMessages = async () => {
    if (userService.getUser()) {
      const allMessages = await messageService.retrieveMessages();
      this.setState({ messages: allMessages });
    }
  };

  handleLogout = () => {
    userService.logout();
    this.setState({
      messages: [],
      user: '',
    });
  };

  handleShowSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() }, () => {
      this.handleGetMessages();
    });
  };

  handleUpdateMessages = (message) => {
    const messagesCopy = [...this.state.messages, message];
    this.setState({ messages: messagesCopy });
  };

  componentDidMount() {
    this.handleGetMessages();

    socket.on('sendMessages', (message) => {
      this.handleUpdateMessages(message);
    });
  }

  render() {
    return !this.state.user ? (
      // Protected Routes
      <div className={'app-outer-container'}>
        <Navbar user={this.state.user} handleLogout={this.handleLogout} handleShowSidebar={this.handleShowSidebar} />
        <div className='app-inner-container'>
          <div className='sidebar-container'>
            <Sidebar webApps={this.state.webApps} showSidebar={this.state.showSidebar} />
          </div>
          <Switch>
            <Route exact path='/' render={() => <Home webApps={this.state.webApps} />} />
            <Route
              exact
              path='/addressbook'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/calendar'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/chat'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/grocerylist'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/photos'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/login'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/signup'
              render={(props) => <Signup {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    ) : (
      <div className={'app-outer-container'}>
        <Navbar user={this.state.user} handleLogout={this.handleLogout} handleShowSidebar={this.handleShowSidebar} />
        <div className='app-inner-container'>
          <div className='sidebar-container'>
            <Sidebar webApps={this.state.webApps} showSidebar={this.state.showSidebar} />
          </div>
          <Switch>
            <Route exact path='/' render={() => <Home webApps={this.state.webApps} />} />
            <Route exact path='/addressbook' render={() => <AddressBook />} />
            <Route exact path='/calendar' render={() => <Calendar />} />
            <Route exact path='/chat' render={() => <Chat messages={this.state.messages} user={this.state.user} />} />
            <Route exact path='/grocerylist' render={() => <GroceryList />} />
            <Route exact path='/photos' render={(props) => <Photos />} />
            <Route exact path='/profile' render={(props) => <Profile />} />
            <Route
              exact
              path='/login'
              render={(props) => <Login {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
            <Route
              exact
              path='/signup'
              render={(props) => <Signup {...props} handleSignupOrLogin={this.handleSignupOrLogin} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
