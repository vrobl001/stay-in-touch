import React from 'react';
import Link from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <nav className={styles.sidebarContainer}>
      <ul>
        <li>
          <i class='small material-icons'>contacts</i> Address Book
        </li>
        <li>
          <i class='small material-icons'>event</i> Calendar
        </li>
        <li>
          <i class='small material-icons'>chat</i> Chat
        </li>
        <li>
          <i class='small material-icons'>restaurant</i> Grocery List
        </li>
        <li>
          <i class='small material-icons'>camera_alt</i> Photos
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
