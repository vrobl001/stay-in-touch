import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import './Sidebar.module.css';

export default function Sidebar(props) {
  const sidebarApps = props.webApps.map((app, idx) =>
    app.active === true ? (
      <li key={idx}>
        <Link className={styles.active} name={idx} to={app.link} onClick={props.handleActiveApp}>
          <i className='material-icons'>{app.icon}</i>
          {app.name}
        </Link>
      </li>
    ) : (
      <li key={idx}>
        <Link name={idx} to={app.link} onClick={props.handleActiveApp}>
          <i className='material-icons'>{app.icon}</i>
          {app.name}
        </Link>
      </li>
    )
  );
  return (
    props.showSidebar === true && (
      <nav className={styles.sidebarContainer}>
        <ul>{sidebarApps}</ul>
      </nav>
    )
  );
}
