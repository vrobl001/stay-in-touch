import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <h1>Stay In Touch</h1>
      </Link>
      <ul>
        <li>Welcome User!</li>
        <li>
          <Link to='signup'>Signup</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/' onClick={props.handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
