import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const conditionalUI = userService.getUser() ? (
    <>
      <li>Welcome {props.user.name}!</li>
      <li>
        <Link to='/' onClick={props.handleLogout}>
          Logout
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to='signup'>Signup</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <h1>
          <i class='material-icons'>apps</i>Stay In Touch
        </h1>
      </Link>
      <ul>{conditionalUI}</ul>
    </nav>
  );
};

export default Navbar;
