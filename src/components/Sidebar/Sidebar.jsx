import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <nav className={styles.sidebarContainer}>
      <ul>
        <li>
          <Link to='/addressbook'>
            <i class='material-icons'>contacts</i> Address Book
          </Link>
        </li>
        <li>
          <Link to='/calendar'>
            <i class='material-icons'>event</i> Calendar
          </Link>
        </li>
        <li>
          <Link to='/chat'>
            <i class='material-icons'>chat</i> Chat
          </Link>
        </li>
        <li>
          <Link to='/grocerylist'>
            <i class='material-icons'>restaurant</i> Grocery List
          </Link>
        </li>
        <li>
          <Link to='photos'>
            <i class='material-icons'>camera_alt</i> Photos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
