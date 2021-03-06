import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './Navbar.module.css';

export default function Navbar(props) {
  const conditionalUI = userService.getUser() ? (
    <div className={styles.rightNav}>
      <p>
        Welcome
        <Link to='/profile' onClick={props.handleActiveApp}>
          <span>{props.user.name}</span>!
        </Link>
      </p>

      <li>
        <Link to='/login' onClick={props.handleLogout}>
          Log out
        </Link>
      </li>
    </div>
  ) : (
    <div className={styles.rightNav}>
      <li>
        <Link to='/login'>Log in</Link>
      </li>
    </div>
  );
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <i className='material-icons' onClick={props.handleShowSidebar}>
          menu
        </i>
        <Link to='/' onClick={props.handleActiveApp}>
          <h1>Stay In Touch</h1>
        </Link>
      </div>
      <ul>{conditionalUI}</ul>
    </nav>
  );
}
