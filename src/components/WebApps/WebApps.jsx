import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WebApps.module.css';

export default function WebApps(props) {
  const allWebApps = props.webApps.map((app, idx) => (
    <Link to={app.link} name={idx} onClick={props.handleActiveApp} key={idx}>
      <div className={styles.webApps}>
        <i className='material-icons'>{app.icon}</i>
        <p>{app.name}</p>
      </div>
    </Link>
  ));

  return <div className={styles.webAppsContainer}>{allWebApps}</div>;
}
