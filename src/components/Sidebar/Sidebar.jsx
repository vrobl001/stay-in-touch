import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  const sidebarApps = props.webApps.map((app, idx) => (
    <li key={idx}>
      <Link to={app.link}>
        <i className='material-icons'>{app.icon}</i> {app.name}
      </Link>
    </li>
  ));
  return (
    props.showSidebar === true && (
      <nav className={styles.sidebarContainer}>
        <ul>{sidebarApps}</ul>
      </nav>
    )
  );
};

export default Sidebar;
