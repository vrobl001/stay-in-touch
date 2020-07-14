import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import userService from './utils/userService';
import messageService from './utils/messageService';
import imageService from './utils/imageService';
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
  state = this.initialState;

  get initialState() {
    return {
      messages: [],
      images: [],
      showSidebar: false,
      user: userService.getUser(),
      webApps: [
        {
          name: 'Address Book',
          link: '/addressbook',
          icon: 'contacts',
          active: false,
        },
        {
          name: 'Calendar',
          link: '/calendar',
          icon: 'event',
          active: false,
        },
        {
          name: 'Chat',
          link: '/chat',
          icon: 'chat',
          active: false,
        },
        {
          name: 'Grocery List',
          link: '/grocerylist',
          icon: 'restaurant',
          active: false,
        },
        {
          name: 'Photos',
          link: '/photos',
          icon: 'camera_alt',
          active: false,
        },
      ],
    };
  }

  handleActiveApp = (e) => {
    let selectedApp = e.target.name;
    this.setState((prevState) => ({
      webApps: prevState.webApps.map((app, idx) =>
        idx.toString() === selectedApp ? { ...app, active: !app.active } : { ...app, active: false }
      ),
    }));
  };

  handleGetMessages = async () => {
    if (userService.getUser()) {
      const allMessages = await messageService.retrieveMessages();
      this.setState({ messages: allMessages });
    }
  };

  handleGetImages = async () => {
    if (userService.getUser()) {
      const allImages = await imageService.retrieveImages();
      this.setState({ images: allImages });
    }
  };

  handleLogout = () => {
    userService.logout();
    this.setState(this.initialState);
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
    this.handleGetImages();
    socket.on('sendMessages', (message) => {
      this.handleUpdateMessages(message);
    });
  }

  render() {
    return (
      <div className={'app-outer-container'}>
        <Navbar
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleShowSidebar={this.handleShowSidebar}
          handleActiveApp={this.handleActiveApp}
        />
        <div className='app-inner-container'>
          <div className='sidebar-container'>
            <Sidebar
              webApps={this.state.webApps}
              showSidebar={this.state.showSidebar}
              handleActiveApp={this.handleActiveApp}
            />
          </div>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Home webApps={this.state.webApps} handleActiveApp={this.handleActiveApp} />}
            />
            <Route
              exact
              path='/addressbook'
              render={() => (this.state.user ? <AddressBook /> : <Redirect to='/login' />)}
            />
            <Route exact path='/calendar' render={() => (this.state.user ? <Calendar /> : <Redirect to='/login' />)} />
            <Route
              exact
              path='/chat'
              render={() =>
                this.state.user ? (
                  <Chat messages={this.state.messages} user={this.state.user} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              exact
              path='/grocerylist'
              render={() => (this.state.user ? <GroceryList /> : <Redirect to='/login' />)}
            />
            <Route
              exact
              path='/photos'
              render={(props) => (this.state.user ? <Photos images={this.state.images} /> : <Redirect to='/login' />)}
            />
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
