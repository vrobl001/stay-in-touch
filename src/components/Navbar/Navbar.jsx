import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const conditionalUI = userService.getUser() ? (
    <div className={styles.rightNav}>
      <p>
        Welcome <span>{props.user.name}</span>!
      </p>
      <li>
        <Link to='/' onClick={props.handleLogout}>
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
          apps
        </i>
        <Link to='/'>
          <h1>Stay In Touch</h1>
        </Link>
      </div>
      <ul>{conditionalUI}</ul>
    </nav>
  );
};

export default Navbar;
